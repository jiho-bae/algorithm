function sol(input) {
  let [A, B] = input.split(' ');
  if (A.length !== B.length) return -1;
  B = Number(B);

  const aLength = A.length;
  const visits = new Array(aLength).fill(0);
  let answer = -1;

  function dfs(L, C) {
    if (L === aLength) {
      C = +C;
      if (B > C && answer < C) answer = C;
      return;
    }

    for (let i = 0; i < aLength; i++) {
      if (visits[i]) continue;
      if (!C.length && A[i] === '0') continue;
      visits[i] = 1;
      dfs(L + 1, `${C}${A[i]}`);
      visits[i] = 0;
    }
  }

  dfs(0, '');

  return answer;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
