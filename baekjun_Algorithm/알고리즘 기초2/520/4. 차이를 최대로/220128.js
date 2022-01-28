function sol([N, str]) {
  N = +N;
  const nums = str.split(' ').map(Number);
  const visit = new Array(N).fill(0);
  let answer = Number.MIN_SAFE_INTEGER;

  function dfs(L, dfsArr) {
    if (L === N) {
      let sum = 0;
      for (let i = 0; i < dfsArr.length - 1; i++) {
        sum += Math.abs(dfsArr[i] - dfsArr[i + 1]);
      }
      answer = Math.max(answer, sum);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visit[i]) continue;
      visit[i] = 1;
      dfs(L + 1, [...dfsArr, nums[i]]);
      visit[i] = 0;
    }
  }

  dfs(0, []);

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
