function sol(input) {
  const [N, L, R, X] = input[0].split(' ').map(Number);
  const A = input[1].split(' ').map(Number);
  let answer = 0;

  function dfs(depth, arr, idx) {
    if (depth >= 2) {
      const min = Math.min(...arr);
      const max = Math.max(...arr);
      const sum = arr.reduce((acc, val) => acc + val, 0);

      if (sum >= L && sum <= R && max - min >= X) answer += 1;
    }

    for (let i = idx; i < N; i++) {
      dfs(L + 1, [...arr, A[i]], i + 1);
    }
  }

  dfs(0, [], 0);

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
