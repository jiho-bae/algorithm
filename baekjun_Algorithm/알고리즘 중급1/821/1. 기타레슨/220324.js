function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const lectures = input[1].split(' ').map(Number);
  const sumOfLectures = lectures.reduce((acc, val) => acc + val, 0);
  let answer = Number.MAX_SAFE_INTEGER;

  function binarySearch(arr, start, end) {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      let cnt = 0;
      let sum = 0;

      for (let i = 0; i < N; i++) {
        if (arr[i] > mid) {
          cnt = Number.MAX_SAFE_INTEGER;
          break;
        }
        if (mid < sum + arr[i]) {
          cnt += 1;
          sum = 0;
        }
        sum += arr[i];
      }
      if (sum > 0) cnt += 1;

      if (M < cnt) {
        start = mid + 1;
      } else {
        end = mid - 1;
        answer = Math.min(mid, answer);
      }
    }
  }

  binarySearch(lectures, 0, sumOfLectures);

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
