class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.queue[this.rear] === undefined) {
      return 0;
    }
    return this.rear - this.front + 1;
  }

  enqueue(value) {
    if (this.size() === 0) {
      this.queue[0] = value;
    } else {
      this.rear += 1;
      this.queue[this.rear] = value;
    }
  }

  dequeue() {
    const tmp = this.queue[this.front];
    delete this.queue[this.front];
    if (this.front === this.rear) {
      this.front = this.rear = 0;
    } else {
      this.front += 1;
    }
    return tmp;
  }
}

function sol(input) {
  const [N, M, K, X] = input[0].split(' ').map(Number);
  const adjArr = Array.from({ length: N + 1 }, () => new Array());
  const dists = new Array(N + 1).fill(-1);

  input.slice(1).forEach((str) => {
    const [from, to] = str.split(' ').map(Number);
    adjArr[from].push(to);
  });

  function bfs() {
    const queue = new Queue();
    queue.enqueue(X);
    dists[X] = 0;

    while (queue.size()) {
      const now = queue.dequeue();

      for (let next of adjArr[now]) {
        if (dists[next] === -1) {
          dists[next] = dists[now] + 1;
          queue.enqueue(next);
        }
      }
    }
  }

  bfs();

  let answer = '';

  dists.forEach((dist, idx) => {
    if (dist === K) {
      answer += `${idx}\n`;
    }
  });

  return answer === '' ? -1 : answer;
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
