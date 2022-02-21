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
  const maps = input.map((str) => str.split(''));
  const walls = new Queue();
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1, 0];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1, 0];
  let answer = 0;

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (maps[i][j] === '#') walls.push([i, j]);
    }
  }

  function moveWall(x, y) {
    maps[x][y] = '.';
    if (x === 7) return;
    maps[x + 1][y] = '#';
    return [x + 1, y];
  }

  function bfs() {
    const queue = new Queue();
    let cnt = 0;
    queue.push([7, 0, 0]);

    while (queue.size()) {
      if (answer) return;

      const [x, y, time] = queue.shift();

      if (cnt + 1 === time) {
        cnt++;
        const size = walls.size();
        for (let i = 0; i < size; i++) {
          const result = moveWall(...walls.shift());
          if (result) walls.push(result);
        }
      }

      if (x === 0 && y === 7) {
        answer = 1;
        return;
      }

      for (let i = 0; i < 9; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx > 7 || ny > 7) continue;
        if (maps[nx][ny] === '#') continue;
        if (nx - 1 >= 0 && maps[nx - 1][ny] === '#') continue;
        queue.push([nx, ny, time + 1]);
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
