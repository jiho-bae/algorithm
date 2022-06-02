function sol(input) {
  const ropes = input
    .slice(1)
    .map(Number)
    .sort((a, b) => b - a);

  let prevWeight = Number.MIN_SAFE_INTEGER;
  let curWeight = 0;

  for (let i = 0, len = ropes.length; i < len; i++) {
    curWeight = ropes[i] * (i + 1);
    if (prevWeight < curWeight) {
      prevWeight = curWeight;
    }
  }

  return prevWeight;
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
