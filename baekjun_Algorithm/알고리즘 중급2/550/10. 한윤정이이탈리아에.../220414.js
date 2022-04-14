function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const banList = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
  let cnt = 0;

  input.slice(1).forEach((str) => {
    const [ice1, ice2] = str.split(' ');
    banList[ice1][ice2] = 1;
    banList[ice2][ice1] = 1;
  });

  function dfs(L, idx, choices) {
    if (L === 3) {
      let isBan = false;

      for (let i = 0; i < 2; i++) {
        for (let j = i + 1; j < 3; j++) {
          if (banList[choices[i]][choices[j]]) {
            isBan = true;
            break;
          }
        }
      }

      if (!isBan) cnt += 1;
      return;
    }

    for (let i = idx; i <= N; i++) {
      dfs(L + 1, i + 1, [...choices, i]);
    }
  }

  dfs(0, 1, []);

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
