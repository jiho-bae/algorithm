function sol(input) {
  const [n, ...testCases] = input;
  const maxNumber = Math.max(...testCases);
  const arr = Array.from({ length: maxNumber + 1 }, () => new Array(4).fill(0));
  const DIVISION = 1000000009;

  arr[1][1] = arr[2][2] = arr[3][1] = arr[3][2] = arr[3][3] = 1;
  for (let i = 4; i <= maxNumber; i++) {
    for (let j = 1; j <= 3; j++) {
      arr[i][j] =
        (arr[i - j].reduce((acc, val) => acc + val, 0) - arr[i - j][j]) %
        DIVISION;
    }
  }

  const answer = testCases.map((elem) =>
    arr[elem].reduce((acc, val) => (acc + val) % DIVISION, 0)
  );
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
