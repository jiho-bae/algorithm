class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(elem) {
    let isContain = false;
    const len = this.queue.length;

    if (!len) {
      this.queue[0] = elem;
      return;
    }

    for (let i = len - 1; i >= 0; i--) {
      if (this.queue[i] <= elem) {
        this.queue.splice(i + 1, 0, elem);
        isContain = true;
        break;
      }
    }

    if (!isContain) this.queue.unshift(elem);
  }

  dequeue() {
    if (!this.queue.length) return 0;

    return this.queue.pop();
  }
}

function sol(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const jewelrys = input
    .slice(1, 1 + N)
    .map((str) => str.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);

  const bags = input
    .slice(1 + N)
    .map(Number)
    .sort((a, b) => a - b);

  const pq = new PriorityQueue();
  let answer = 0;
  let index = 0;

  for (let i = 0; i < K; i++) {
    while (index < N) {
      if (bags[i] >= jewelrys[index][0]) {
        pq.enqueue(jewelrys[index][1]);
        index++;
      } else {
        answer += pq.dequeue();
        break;
      }
    }

    if (index === N) {
      answer += pq.dequeue();
    }
  }

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
