function sol(input) {
  const stack = [];

  for (let elem of input) {
    if (stack[stack.length - 1] !== elem) stack.push(elem);
  }

  const cntOfZero = stack.filter((elem) => elem === '0').length;
  const cntOfOne = stack.length - cntOfZero;

  return Math.min(cntOfZero, cntOfOne);
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
