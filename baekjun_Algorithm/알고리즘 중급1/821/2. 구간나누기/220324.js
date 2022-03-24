function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const sections = input[1].split(' ').map(Number);
  const maxSectionLength = Math.max(...sections) - Math.min(...sections);
  let answer = Number.MAX_SAFE_INTEGER;

  function binarySearch(arr, start, end) {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      let cnt = 0;
      let partsArr = [];

      for (let i = 0; i < N; i++) {
        const partsLength =
          Math.max(...partsArr, arr[i]) - Math.min(...partsArr, arr[i]);
        if (mid < partsLength) {
          cnt += 1;
          partsArr = [];
        }
        partsArr.push(arr[i]);
      }
      if (partsArr.length) cnt += 1;

      if (M < cnt) {
        start = mid + 1;
      } else {
        end = mid - 1;
        answer = Math.min(mid, answer);
      }
    }
  }

  binarySearch(sections, 0, maxSectionLength);

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
