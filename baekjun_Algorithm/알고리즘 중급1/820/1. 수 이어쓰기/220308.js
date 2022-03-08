function sol(input) {
  let [N, K] = input.split(' ').map(Number);
  let digit = 1;
  let num = 0;
  let len = 0;

  while (1) {
    const nextNum = 9 * 10 ** (digit - 1);
    if (len + nextNum * digit >= K) break;
    len += nextNum * digit;
    num += nextNum;
    digit++;
  }

  K -= len;

  const share = Math.floor((K - 1) / digit);
  const rest = (K - 1) % digit;
  num += share + 1;
  if (num > N) return -1;

  const targetNumber = String(10 ** (digit - 1) + share);
  return targetNumber[rest];
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
