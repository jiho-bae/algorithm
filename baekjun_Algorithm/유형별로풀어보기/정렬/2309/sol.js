function sol(input) {
  const heights = input.map(Number).sort((a, b) => a - b);
  const sum = heights.reduce((acc, val) => acc + val, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = 1; j < 9; j++) {
      if (sum - heights[i] - heights[j] === 100) {
        heights.splice(j, 1);
        heights.splice(i, 1);
        return heights.join('\n');
      }
    }
  }
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
