function sol(input) {
  const positive = [];
  const negative = [];
  let zero = false;
  let sum = 0;

  input.slice(1).forEach((elem) => {
    const num = +elem;
    if (num === 1) {
      sum += 1;
      return;
    }
    if (num > 0) positive.push(num);
    else if (num < 0) negative.push(num);
    else zero = true;
  });

  positive.sort((a, b) => b - a);
  negative.sort((a, b) => a - b);

  if (positive.length % 2 === 1) {
    sum += positive.pop();
  }
  if (negative.length % 2 === 1) {
    if (zero) negative.pop();
    else sum += negative.pop();
  }

  const pLen = positive.length;
  for (let i = 0; i < pLen; i += 2) {
    sum += positive[i] * positive[i + 1];
  }

  const nLen = negative.length;
  for (let i = 0; i < nLen; i += 2) {
    sum += negative[i] * negative[i + 1];
  }

  return sum;
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
