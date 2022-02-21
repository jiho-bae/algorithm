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

  push(value) {
    if (this.size() === 0) {
      this.queue[0] = value;
    } else {
      this.rear += 1;
      this.queue[this.rear] = value;
    }
  }

  shift() {
    let tmp;
    tmp = this.queue[this.front];
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
  const T = +input[0];
  const answer = [];
  let visits;
  const primes = Array.from({ length: 10000 }, (_, i) => i);
  primes[1] = 0;

  function primeNumber(num) {
    for (let i = 2; i <= num; i++) {
      if (primes[i] === 0) continue;
      for (let j = 2 * i; j <= num; j += i) {
        primes[j] = 0;
      }
    }
  }

  primeNumber(9999);

  function bfs(start) {
    const queue = new Queue();
    queue.push(start);
    visits = new Array(10000).fill(-1);
    visits[start] = 0;

    while (queue.size()) {
      const now = queue.shift();

      for (let i = 0; i < 4; i++) {
        const strArr = now.split('');
        for (let j = 0; j < 10; j++) {
          strArr[i] = j;
          const next = +strArr.join('');
          if (next < 1000) continue;
          if (primes[next] && visits[next] === -1) {
            visits[next] = visits[now] + 1;
            queue.push(String(next));
          }
        }
      }
    }
  }

  for (let i = 1; i <= T; i++) {
    const [start, target] = input[i].split(' ');
    if (start === target) {
      answer.push(0);
      continue;
    }

    bfs(start);
    answer.push(visits[target] === -1 ? 'Impossible' : visits[target]);
  }

  return answer.join('\n');
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
