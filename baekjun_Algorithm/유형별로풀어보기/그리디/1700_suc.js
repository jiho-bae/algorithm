/* 
  이전에는 그리디하게 남은 사용횟수가 적은 플러그부터 뺐다.

  -> 단 한번도 쓰일 기회가 없거나 + 제일 마지막에 쓰일 기기를 빼보자.

  N=2이고, [1,2,3,2,4,1,3,1] 이라고 하면.. 이제 쓰이지 않을 예정이거나, 제일 마지막에 쓰일 기기를 빼면...
*/

function sol(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const orders = input[1].split(' ').map(Number);
  const multitab = new Array(N).fill(0);

  let answer = 0;

  orders.forEach((order, i) => {
    let isContain = false;

    for (let j = 0; j < N; j++) {
      if (multitab[j] === order) {
        isContain = true;
        break;
      }
    }

    if (isContain) return;

    for (let j = 0; j < N; j++) {
      if (multitab[j] === 0) {
        multitab[j] = order;
        isContain = true;
        break;
      }
    }

    if (isContain) return;

    let targetIdx = (prevIdx = -1);
    const restOrders = orders.slice(i + 1);

    for (let j = 0; j < N; j++) {
      const curOrder = multitab[j];
      const nextIdx = restOrders.indexOf(curOrder);

      if (nextIdx === -1) {
        targetIdx = j;
        break;
      }

      if (nextIdx > prevIdx) {
        targetIdx = j;
        prevIdx = nextIdx;
      }
    }
    multitab[targetIdx] = order;
    answer += 1;
  });

  return answer;
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
