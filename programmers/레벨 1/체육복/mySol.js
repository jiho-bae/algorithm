function solution(n, losts, reserves) {
  const arr = [...new Array(n)].map(() => 1);

  losts.forEach((lost) => arr[lost - 1]--);
  reserves.forEach((reserve) => arr[reserve - 1]++);

  for (let i = 1; i < arr.length - 1; i++) {
    if (
      (arr[i] === 0 && arr[i - 1] === 2) ||
      (arr[i - 1] === 0 && arr[i] === 2)
    ) {
      arr[i] = 1;
      arr[i - 1] = 1;
    } else if (arr[i] === 0 && arr[i + 1] === 2) {
      arr[i] = 1;
      arr[i + 1] = 1;
    }
  }

  return arr.filter((value) => value >= 1).length;
}
