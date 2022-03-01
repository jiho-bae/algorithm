function sol(input) {
  const S = input[0];
  const T = input[1];

  function addA(str, dir) {
    return dir ? str + 'A' : 'A' + str;
  }

  function reverseAddB(str, dir) {
    return dir ? str + 'B' : 'B' + str;
  }

  const cntAofS = S.split('A').length - 1;
  const cntAofT = T.split('A').length - 1;
  const cntA = cntAofT - cntAofS;
  const cntB = T.length - cntAofT - (S.length - cntAofS);

  let answer = 0;

  function dfs(a, b, str, dir) {
    if (answer) return;
    if (a === cntA && b === cntB) {
      str = dir ? str : str.split('').reverse().join('');
      if (T === str) {
        answer = 1;
        return;
      }
    }

    if (a < cntA) dfs(a + 1, b, addA(str, dir), dir);
    if (b < cntB) {
      dfs(a, b + 1, reverseAddB(str, !dir), !dir);
    }
  }

  dfs(0, 0, S, 1);

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
