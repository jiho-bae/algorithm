function solution(n, computers) {
  let cnt = 0;

  function dfs(x) {
    const row = computers[x];
    row.forEach((cell, y) => {
      if (cell) {
        computers[x][y] = 0;
        dfs(y);
      }
    });
  }

  for (let i = 0; i < n; i++) {
    const sum = computers[i].reduce((acc, val) => acc + val, 0);
    if (sum > 0) {
      dfs(i);
      cnt++;
    }
  }

  return cnt;
}
