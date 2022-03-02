function sol(input) {
  const M = +input[2];
  const answer = new Array(M).fill(0);
  const cardsObj = {};

  input[1]
    .split(' ')
    .forEach(
      (elem) => (cardsObj[elem] = cardsObj[elem] ? cardsObj[elem] + 1 : 1)
    );
  input[3]
    .split(' ')
    .forEach((elem, idx) => (answer[idx] = cardsObj[elem] ?? 0));

  return answer.join(' ');
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
