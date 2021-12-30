function solution(n, wires) {
  const adjArr = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  const visit = Array(n + 1).fill(0);
  let cnt = 0;

  wires.forEach(([start, end]) => {
    adjArr[start][end] = 1;
    adjArr[end][start] = 1;
  });

  function dfs(idx) {
    visit[idx] = 1;
    cnt++;

    for (let i = 1; i <= n; i++) {
      adjArr[idx][i] && !visit[i] && dfs(i);
    }
  }

  return wires.reduce((min, [start, end]) => {
    adjArr[start][end] = adjArr[end][start] = 0;
    dfs(1);
    adjArr[start][end] = adjArr[end][start] = 1;
    min = Math.min(min, Math.abs(n - 2 * cnt));
    visit.forEach((_, i) => (visit[i] = 0));
    cnt = 0;
    return min;
  }, n);
}
