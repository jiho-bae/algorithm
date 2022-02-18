function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const maps = input.slice(1).map((str) => str.split('').map(Number));
  const check = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => new Array(2).fill(0))
  );

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer;

  function bfs() {
    const queue = [];
    queue.push([0, 0, 1, 0]);
    check[0][0][0] = 1;
    let index = 0;
    while (index < queue.length) {
      const [x, y, cnt, destroy] = queue[index++];

      if (x === N - 1 && y === M - 1) {
        answer = cnt;
        return;
      }

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (check[nx][ny][destroy]) continue;
        if (!maps[nx][ny]) {
          check[nx][ny][destroy] = 1;
          queue.push([nx, ny, cnt + 1, destroy]);
        } else if (!destroy && maps[nx][ny] === 1) {
          check[nx][ny][1] = 1;
          queue.push([nx, ny, cnt + 1, 1]);
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
