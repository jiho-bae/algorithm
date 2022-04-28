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
  const K = +input[0];
  const [W, H] = input[1].split(' ').map(Number);
  const maps = input.slice(2).map((str) => str.split(' ').map(Number));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const hx = [-1, -2, -2, -1, 1, 2, 2, 1];
  const hy = [-2, -1, 1, 2, 2, 1, -1, -2];
  let answer = -1;

  function isMovable(x, y) {
    if (x < 0 || y < 0 || x >= H || y >= W) return false;
    if (maps[x][y] === 1) return false;
    return true;
  }

  function bfs() {
    const queue = new Queue();
    const visits = Array.from({ length: H }, () =>
      Array.from({ length: W }, () => new Array(K + 1).fill(0))
    );
    queue.enqueue([0, 0, 0, K]);
    visits[0][0][K] = 1;
    while (queue.size()) {
      const [x, y, cnt, ck] = queue.dequeue();

      if (x === H - 1 && y === W - 1) {
        answer = cnt;
        return;
      }
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (!isMovable(nx, ny)) continue;
        if (visits[nx][ny][ck]) continue;
        visits[nx][ny][ck] = 1;
        queue.enqueue([nx, ny, cnt + 1, ck]);
      }

      if (ck) {
        for (let i = 0; i < 8; i++) {
          const [nx, ny] = [x + hx[i], y + hy[i]];
          if (!isMovable(nx, ny)) continue;
          if (visits[nx][ny][ck - 1]) continue;
          visits[nx][ny][ck - 1] = 1;
          queue.enqueue([nx, ny, cnt + 1, ck - 1]);
        }
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
