function sol(input) {
  const cnt = input.length;
  const NO = "I'm Sorry Hansoo";
  const sorted = input.split('').sort();
  let odd;
  let isNo = false;

  for (let i = cnt - 1; i >= 0; i--) {
    const cur = sorted[i];
    const before = sorted[i - 1];

    if (before === cur) {
      sorted[i - 1] = '';
      i--;
      continue;
    }

    if (odd) {
      isNo = true;
      break;
    }

    odd = cur;
    sorted[i] = '';
  }

  if (isNo) return NO;

  const oddStr = cnt % 2 === 0 ? odd : '';
  return sorted.join('') + oddStr + sorted.reverse().join('');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
