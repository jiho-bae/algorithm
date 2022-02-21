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
  const N = +input[0];
  const areas = input.slice(1).map((str) => str.split(''));
  let visits = Array.from({ length: N }, () => new Array(N).fill(0));
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  const answer = [];
  let cntArea = 0;

  function bfs(start) {
    const queue = new Queue();
    queue.push(start);
    let color = areas[start.x][start.y];

    while (queue.size()) {
      const { x, y } = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
        if (areas[nx][ny] !== color) continue;
        if (visits[nx][ny]) continue;
        visits[nx][ny] = 1;
        queue.push({ x: nx, y: ny });
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visits[i][j]) continue;
      visits[i][j] = 1;
      cntArea += 1;
      bfs({ x: i, y: j });
    }
  }

  answer.push(cntArea);
  cntArea = 0;
  visits = Array.from({ length: N }, () => new Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (areas[i][j] === 'G') areas[i][j] = 'R';
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visits[i][j]) continue;
      visits[i][j] = 1;
      cntArea += 1;
      bfs({ x: i, y: j });
    }
  }

  answer.push(cntArea);

  return answer.join(' ');
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
