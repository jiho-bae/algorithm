function sol(input) {
  const n = +input[0];
  const answer = [];

  input.slice(1).forEach((line) => {
    const [a, b] = line.split(' ').map(Number);
    let cNumber = 1;
    for (let i = 1; i <= b; i++) {
      cNumber = (cNumber * a) % 10;
    }
    answer.push(cNumber === 0 ? 10 : cNumber);
  });

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
