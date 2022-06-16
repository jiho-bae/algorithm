function sol(prev, after) {
  const prevLen = prev.length;
  const afterLen = after.length;

  const dp = Array.from({ length: prevLen + 1 }, () =>
    new Array(afterLen + 1).fill(0)
  );

  dp[0][0] = 0;
  for (let i = 1; i <= afterLen; i++) {
    dp[0][i] = dp[0][i - 1] + 1;
  }
  for (let i = 1; i <= prevLen; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }

  for (let i = 1; i <= prevLen; i++) {
    for (let j = 1; j <= afterLen; j++) {
      if (prev[i - 1] === after[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[prevLen - 1][afterLen - 1];
}

sol('cat', 'cut'); // 1
sol('sunday', 'saturday'); // 3
