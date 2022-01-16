function sol(n) {
  if (n === 1) return;

  const answer = [];
  let i = 2;

  while (n > 1) {
    if (n % i === 0) {
      answer.push(i);
      n /= i;
      continue;
    }
    i++;
  }

  return answer.join('\n');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(+line));
  })
  .on('close', () => {
    process.exit();
  });
