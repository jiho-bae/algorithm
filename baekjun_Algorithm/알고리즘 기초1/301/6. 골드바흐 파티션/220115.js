function getPrimeArr(x) {
  const result = new Array(x + 1).fill(1);
  const sqrtX = Math.sqrt(x);
  result[1] = 0;
  for (let i = 2; i <= sqrtX; i++) {
    if (!result[i]) continue;
    for (let j = 2 * i; j <= x; j += i) {
      result[j] = 0;
    }
  }
  return result;
}

function sol(input) {
  const testCase = input.slice(1).map(Number);
  console.log(testCase);
  const answer = testCase.map((val) => {
    const half = val / 2;
    let cnt = 0;
    let prime = getPrimeArr(val);
    for (let i = 2; i <= half; i++) {
      if (prime[i] && prime[val - i]) cnt++;
    }
    return cnt;
  });

  return answer.join('\n');
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
