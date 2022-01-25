const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(+line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });

function sol(input) {
  input = input.map(Number).sort((a, b) => a - b);
  const sum = input.reduce((acc, val) => acc + val, 0);
  const target = 100;
  const len = input.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (sum - input[i] - input[j] === target) {
        input.splice(j, 1);
        input.splice(i, 1);
        break;
      }
    }
  }

  return input.join('\n');
}
