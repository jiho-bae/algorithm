// 나름 규칙을 찾으려고 했는데 안풀려서..
// 큐를 도입함..

function sol(input) {
  const N = +input;
  if (N === 1) return 1;

  const queue = new Queue();
  for (let i = 1; i <= N; i++) {
    queue.enqueue(i);
  }

  while (queue.size() !== 1) {
    queue.dequeue();
    queue.enqueue(queue.dequeue());
  }

  return queue.dequeue();
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });

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
