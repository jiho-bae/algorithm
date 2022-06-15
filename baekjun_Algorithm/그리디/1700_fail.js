/* 
  내가 생각한 방향..

  N=2, K=9, orders = [1,3,1,2,1,5,4,2,1] 일 때 4가 나와야 함.(1을 계속 멀티탭에 꽂아두는게 최적.)
  그래서 각 전자기기의 남은 사용횟수를 기억해두고, 횟수 기반으로 pq를 제작.
  횟수가 더 많을수록 pq의 낮은 인덱스에 위치. 최상단의 인덱스에는 남은 사용횟수가 가장 적은 멀티탭에 꽂힌 전자기기가 담긴다.
  그래서 멀티탭에서 특정 코드를 빼야 할 경우, 남은 사용횟수가 가장 낮은 전자기기부터 뽑는 순서대로..  하면.. 중복을 피할 수 있지 않을까

  그러나,, 이것이 정답은 아니다.
*/

function sol(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const orders = input[1].split(' ').map(Number);
  const multitab = new pq();
  const frequency = new Array(K).fill(0);
  let cnt = 0;

  orders.forEach((elem) => (frequency[elem] += 1));
  orders.slice(0, N).forEach((elem) => {
    frequency[elem] -= 1;
    multitab.push([elem, frequency[elem]]);
  });

  for (let i = N; i < K; i += N) {
    const curOrders = orders.slice(i, i + N);
    const targets = [];
    let curCnt = 0;

    curOrders.forEach((curOrder) => {
      if (multitab.contain(curOrder)) {
        frequency[curOrder] -= 1;
        multitab.push([curOrder, frequency[curOrder]]);
      } else {
        curCnt += 1;
        targets.push(curOrder);
      }
    });

    if (targets.length > 0) {
      targets.forEach((target) => {
        multitab.pop();
        frequency[target] -= 1;
        multitab.push([target, frequency[target]]);
      });
    }

    cnt += curCnt;
  }

  return cnt;
}

class pq {
  constructor() {
    this.queue = [];
  }

  length() {
    return this.queue.length;
  }

  push(elem) {
    const len = this.length();
    if (!len) {
      this.queue.push(elem);
      return;
    }

    const [_, weight] = elem;
    let isPushed = false;

    for (let i = len - 1; i >= 0; i--) {
      const [__, curWeight] = this.queue[i];

      if (weight < curWeight) {
        this.queue.splice(i + 1, 0, elem);
        isPushed = true;
        break;
      }
    }

    if (!isPushed) this.queue.unshift(elem);
  }

  contain(elem) {
    const len = this.length();
    if (!len) {
      return;
    }

    for (let i = len - 1; i >= 0; i--) {
      const [curNum, __] = this.queue[i];
      if (elem === curNum) {
        this.queue.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  pop() {
    return this.queue.pop();
  }
}

const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
