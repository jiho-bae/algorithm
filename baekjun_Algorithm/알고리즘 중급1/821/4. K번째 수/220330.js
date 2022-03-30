function sol(input) {
  const N = +input[0];
  const K = +input[1];
  let answer;

  function binarySearch(start, end) {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      let minCnt = 0;

      for (let i = 1; i <= N; i++) {
        minCnt += Math.min(N, Math.floor(mid / i));
      }

      if (minCnt >= K) {
        answer = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  binarySearch(1, K);

  return answer;
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
