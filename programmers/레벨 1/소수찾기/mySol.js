function solution(n) {
  const arr = new Array(n);
  let count = 0;

  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) count++;
  }
  return count;
}
