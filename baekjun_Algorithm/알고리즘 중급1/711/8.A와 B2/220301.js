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
  const S = input[0];
  const T = input[1];
  const sLen = S.length;
  let answer = 0;

  function bfs() {
    const queue = new Queue();
    queue.push(T);

    while (queue.size()) {
      const next = queue.shift();

      if (answer) return;
      if (next.length < sLen) return;
      if (next === S) {
        answer = 1;
        return;
      }

      if (next[next.length - 1] === 'A') {
        queue.push(next.slice(0, next.length - 1));
      }

      if (next[0] === 'B') {
        queue.push([...next.slice(1)].reverse().join(''));
      }
    }
  }

  bfs();

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
