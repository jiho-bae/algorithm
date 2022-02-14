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

function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const boards = input.slice(1).map((row) => row.split('').map(Number));
  const visits = Array.from({ length: 100 }, () => new Array(100).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let answer;

  function bfs() {
    const queue = [[0, 0, 0]];
    visits[0][0] = 1;

    while (queue.length) {
      const [x, y, cnt] = queue.shift();
      console.log(x, y);
      if (x === N - 1 && y === M - 1) {
        answer = cnt;
        return;
      }

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (visits[nx][ny]) continue;
        visits[nx][ny] = 1;
        if (!boards[nx][ny]) queue.unshift([nx, ny, cnt]);
        else {
          boards[nx][ny] = 0;
          queue.push([nx, ny, cnt + 1]);
        }
      }
    }
  }

  bfs();
  return answer;
}
