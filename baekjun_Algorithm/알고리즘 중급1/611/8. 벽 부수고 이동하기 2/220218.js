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
  const [N, M, K] = input[0].split(' ').map(Number);
  const maps = input.slice(1).map((str) => str.split('').map(Number));
  const check = Array.from({ length: K + 1 }, () => {
    return {};
  });

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer;

  function bfs() {
    const queue = new Queue();
    queue.push([0, 0, 1, 0]);
    check[0]['00'] = 1;
    let flag = 0;

    while (queue.size()) {
      if (flag) return;
      const [x, y, cnt, destroy] = queue.shift();

      if (x === N - 1 && y === M - 1) {
        answer = cnt;
        flag = 1;
        return;
      }

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (!maps[nx][ny] && !check[destroy][`${nx}${ny}`]) {
          check[destroy][`${nx}${ny}`] = 1;
          queue.push([nx, ny, cnt + 1, destroy]);
        } else if (
          destroy < K &&
          maps[nx][ny] === 1 &&
          !check[destroy + 1][`${nx}${ny}`]
        ) {
          check[destroy + 1][`${nx}${ny}`] = 1;
          queue.push([nx, ny, cnt + 1, destroy + 1]);
        }
      }
    }
  }

  bfs();

  return answer ?? -1;
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
