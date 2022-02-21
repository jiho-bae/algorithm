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
  const [W, H] = input[0].split(' ').map(Number);
  const maps = input.slice(1).map((row) => row.split(''));
  const visits = Array.from({ length: H }, () =>
    new Array(W).fill(Number.MAX_SAFE_INTEGER)
  );
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  const target = [];
  for (let i = 0; i < H; i++) {
    if (target.length === 2) break;
    for (let j = 0; j < W; j++) {
      if (maps[i][j] === 'C') target.push({ x: i, y: j });
    }
  }

  const start = target[0];
  const end = target[1];

  function bfs() {
    const queue = new Queue();
    for (let i = 0; i < 4; i++) {
      queue.push({ ...start, dir: i, cnt: 0 });
    }

    while (queue.size()) {
      const { x, y, dir, cnt } = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= H || ny >= W) continue;
        if (maps[nx][ny] === '*') continue;
        const nextCnt = dir === i ? cnt : cnt + 1;
        if (visits[nx][ny] < nextCnt) continue;
        visits[nx][ny] = nextCnt;
        queue.push({ x: nx, y: ny, dir: i, cnt: nextCnt });
      }
    }
  }

  bfs();
  return visits[end.x][end.y];
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
