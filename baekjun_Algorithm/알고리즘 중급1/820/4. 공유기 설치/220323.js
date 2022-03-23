function sol(input) {
  const [N, C] = input[0].split(' ').map(Number);
  const houses = input.slice(1).map(Number);
  houses.sort((a, b) => a - b);
  let answer = -1;

  function binarySearch(arr, start, end) {
    if (start > end) return;
    const distance = Math.floor((start + end) / 2);
    const len = arr.length;
    let place = arr[0];
    let cnt = 1;

    for (let i = 1; i < len; i++) {
      if (arr[i] >= place + distance) {
        place = arr[i];
        cnt++;
      }
    }
    if (cnt >= C) {
      answer = distance;
      binarySearch(arr, distance + 1, end);
    } else {
      binarySearch(arr, 0, distance - 1);
    }
  }

  binarySearch(houses, 0, houses[houses.length - 1] - houses[0]);

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
