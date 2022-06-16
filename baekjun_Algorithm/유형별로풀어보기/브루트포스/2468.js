function sol(input) {
  const N = +input[0];
  const maps = input.slice(1).map((str) => str.split(' ').map(Number));
  const floods = Array.from({ length: N }, () => new Array(N).fill(0));
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  let answer = 1;
  let height = 1;

  function initFloods() {
    for (let i = 0; i < N; i++) {
      floods[i] = floods[i].fill(0);
    }
  }

  let maxHeight = -1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (maps[i][j] > maxHeight) maxHeight = maps[i][j];
    }
  }

  function searchSafeArea(x, y) {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= N || floods[nx][ny] === 1)
        continue;
      floods[nx][ny] = 1;
      searchSafeArea(nx, ny);
    }
  }

  function rainDown(height) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (maps[i][j] <= height) floods[i][j] = 1;
      }
    }
  }

  function isSafeArea(i, j) {
    return floods[i][j] === 0;
  }

  function getSafeAreaCnt() {
    let safeAreaCnt = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (isSafeArea(i, j)) {
          searchSafeArea(i, j);
          safeAreaCnt += 1;
        }
      }
    }

    return safeAreaCnt;
  }

  for (let i = height; i <= maxHeight; i++) {
    initFloods();
    rainDown(i);
    const safeAreaCnt = getSafeAreaCnt();
    answer = Math.max(answer, safeAreaCnt);
  }

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
