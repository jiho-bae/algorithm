function sol(input) {
  const N = +input;
  let moreThanN = 1;
  let maxNumber = 1;
  let answer = -1;

  for (let i = 1; i <= 1000000; i++) {
    maxNumber = i;
    moreThanN = ((i + 1) * i) / 2;

    if (moreThanN === N) return maxNumber;
    else if (moreThanN > N) {
      let cnt = i - 1;
      let target = moreThanN - i;
      let diff = N - target;
      while (diff < i) {
        target -= cnt;
        cnt--;
        diff = N - target;
      }
      return cnt + 1;
    }
  }

  return answer;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
