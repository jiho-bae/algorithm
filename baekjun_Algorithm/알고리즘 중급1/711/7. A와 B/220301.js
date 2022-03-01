// 항상 뒤에 알파벳을 추가하므로, 거꾸로 생각하면 된다.

function sol(input) {
  const S = input[0];
  let T = input[1];

  while (T.length !== S.length) {
    if (T[T.length - 1] === 'A') {
      T = T.slice(0, T.length - 1);
    } else {
      T = [...T.slice(0, T.length - 1)].reverse().join('');
    }
  }

  return S === T ? 1 : 0;
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
