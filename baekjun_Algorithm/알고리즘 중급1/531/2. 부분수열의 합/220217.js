function sol(input) {
  const [N, S] = input[0].split(' ').map(Number);
  const numbers = input[1].split(' ').map(Number);
  let cnt = 0;

  function dfs(L, sum) {
    if (L > 0 && sum === S) {
      cnt++;
    }

    for (let i = L; i < N; i++) {
      dfs(i + 1, sum + numbers[i]);
    }
  }

  dfs(0, 0);
  return cnt;
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
