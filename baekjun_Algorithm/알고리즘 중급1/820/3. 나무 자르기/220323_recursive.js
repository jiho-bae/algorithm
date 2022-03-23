function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const treeHeights = input[1].split(' ').map(Number);

  function binarySearch(arr, start, end) {
    if (start > end) return;
    const mid = Math.floor((start + end) / 2);

    const sumCuttingHeights = arr.reduce(
      (acc, val) => acc + (val / mid > 1 ? val - mid : 0),
      0
    );

    if (sumCuttingHeights === M) {
      answer = mid;
      return;
    } else if (sumCuttingHeights > M) {
      answer = mid;
      binarySearch(arr, mid + 1, end);
    } else {
      binarySearch(arr, start, mid - 1);
    }
  }

  let answer = 0;
  binarySearch(treeHeights, 0, Math.max(...treeHeights));
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
