function solution(n, times) {
  times.sort((a, b) => a - b);

  let left = 1;
  let right = n * times[times.length - 1];

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const cnt = times.reduce((acc, val) => acc + Math.floor(middle / val), 0);

    if (cnt >= n) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;
}
