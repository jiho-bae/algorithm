function sol(input) {
  const targetStr = input[0];
  const compareStr = input[1];
  const targetLen = targetStr.length;
  const compareLen = compareStr.length;
  let cnt = 0;

  for (let i = 0; i < targetLen; i++) {
    if (targetStr[i] === compareStr[0]) {
      if (targetStr.slice(i, i + compareLen) === compareStr) {
        cnt += 1;
        i += compareLen - 1;
      }
    }
  }

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
