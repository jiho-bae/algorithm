function solution(k, dungeons) {
  let max = Number.MIN_SAFE_INTEGER;
  const len = dungeons.length;
  const visit = [];
  dungeons.sort((a, b) => b[0] - a[0]);

  function dfs(L, life, cnt) {
    if (L === len) {
      max = Math.max(max, cnt);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (visit[i]) continue;
      if (life < dungeons[i][0] || life < dungeons[i][1]) continue;
      visit[i] = 1;
      dfs(L + 1, life - dungeons[i][1], cnt + 1);
      visit[i] = 0;
    }
    max = Math.max(max, cnt);
  }
  dfs(0, k, 0);

  return max;
}
