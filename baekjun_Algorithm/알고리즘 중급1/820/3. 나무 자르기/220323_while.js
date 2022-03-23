function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const treeHeights = input[1].split(' ').map(Number);

  function binarySearch(arr, start, end, target) {
    let answer = 0;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const sumCuttingHeights = arr.reduce(
        (acc, val) => acc + (val / mid > 1 ? val - mid : 0),
        0
      );

      if (sumCuttingHeights === target) {
        answer = mid;
        break;
      } else if (sumCuttingHeights > target) {
        answer = mid;
        start = mid + 1;
      } else end = mid - 1;
    }
    return answer;
  }

  const answer = binarySearch(treeHeights, 0, Math.max(...treeHeights), M);
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
