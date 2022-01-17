function sol(input) {
  const [n, ...testCases] = input;
  const maxNumber = Math.max(...testCases);
  const arr = new Array(maxNumber + 1);
  arr[1] = 1;
  arr[2] = 2;
  arr[3] = 4;

  for (let i = 4; i <= maxNumber; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }

  const answer = testCases.map((elem) => arr[elem]);
  return answer.join('\n');
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
