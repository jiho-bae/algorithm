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

function calculator(num, opt) {
  switch (opt) {
    case '+':
      return num + num;
    case '*':
      return num * num;
    case '/':
      return 1;
  }
}

function sol(input) {
  const [s, t] = input.split(' ').map(Number);

  if (s === t) return 0;
  if (t === 0) return '-';
  const operator = ['*', '+', '/'];
  const answer = [];

  function bfs() {
    const queue = new Queue();
    queue.push([s, '']);
    let division = false;

    while (queue.size()) {
      const [now, oper] = queue.shift();

      if (now === t) {
        answer.push(oper);
        return;
      }

      for (let op of operator) {
        const next = calculator(now, op);
        if (next > t) continue;
        if (next === 1) {
          if (division) continue;
          division = true;
        }
        queue.push([next, oper + op]);
      }
    }
  }

  bfs();

  return answer.length === 0 ? -1 : answer[0];
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
