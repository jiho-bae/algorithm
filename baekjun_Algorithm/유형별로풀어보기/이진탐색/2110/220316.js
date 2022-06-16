function sol(input) {
  const [N, C] = input[0].split(' ').map(Number);
  const houses = input.slice(1).map(Number);
  houses.sort((a, b) => a - b);
  let max = -1;

  function placeRouter(arr, start, end) {
    if (start > end) return;
    const mid = Math.floor((start + end) / 2);
    const len = arr.length;
    let place = arr[0];
    let cnt = 1;

    for (let i = 1; i < len; i++) {
      if (arr[i] >= place + mid) {
        place = arr[i];
        cnt++;
      }
    }
    if (cnt >= C) {
      max = mid;
      placeRouter(arr, mid + 1, end);
    } else {
      placeRouter(arr, 0, mid - 1);
    }
  }

  placeRouter(houses, 0, houses[houses.length - 1] - houses[0]);

  return max;
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
