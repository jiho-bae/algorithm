function sol(input) {
  const formular = input[1].split('');
  const alphabetValues = input.slice(2);
  const charCode = 65;
  const stack = [];
  const matchObj = {};

  alphabetValues.forEach((alphabetValue, idx) => {
    const alphabet = String.fromCharCode(charCode + idx);
    matchObj[alphabet] = Number(alphabetValue);
  });

  formular.forEach((elem) => {
    const isAlphabet = /[A-Z]/.test(elem);
    if (isAlphabet) {
      stack.push(matchObj[elem]);
      return;
    }

    const right = stack.pop();
    const left = stack.pop();

    if (elem === '+') {
      stack.push(left + right);
    } else if (elem === '*') {
      stack.push(left * right);
    } else if (elem === '-') {
      stack.push(left - right);
    } else if (elem === '/') {
      stack.push(left / right);
    }
  });

  return stack.pop().toFixed(2);
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
