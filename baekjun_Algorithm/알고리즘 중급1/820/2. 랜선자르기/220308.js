function sol(input) {
  const [K, N] = input[0].split(' ').map(Number);
  const lans = input.slice(1).map(Number);
  let maxValue = Math.max(...lans);
  let maxLength = -1;

  function findMaxLength(start, end) {
    const mid = Math.floor((start + end) / 2);
    const cnt = lans.reduce((acc, val) => acc + Math.floor(val / mid), 0);
    if (start > end) return;

    if (cnt >= N) {
      maxLength = Math.max(maxLength, mid);
      findMaxLength(mid + 1, end);
    } else if (cnt < N) {
      findMaxLength(start, mid - 1);
    }
  }

  findMaxLength(1, maxValue);
  return maxLength;
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
