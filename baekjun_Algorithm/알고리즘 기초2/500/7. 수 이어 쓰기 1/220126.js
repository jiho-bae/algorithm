require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });

function sol(n) {
  const length = n.length;
  if (length === 1) return n;

  let answer = 0;
  for (let i = 1; i < length; i++) {
    answer += i * (9 * 10 ** (i - 1));
  }
  answer += length * (n - 10 ** (length - 1) + 1);
  return answer;
}
