function solution(n, works) {
  const sum = works.reduce((acc, val) => acc + val, 0);
  if (sum <= n) return 0;

  const worksLen = works.length;
  works.sort((a, b) => a - b);

  let cnt = n;
  while (cnt) {
    const maxValue = works[worksLen - 1];

    for (let i = worksLen - 1; i >= 0; i--) {
      if (works[i] >= maxValue) {
        works[i] -= 1;
        cnt -= 1;
      }
      if (cnt === 0) break;
    }
  }

  return works.reduce((acc, val) => acc + val ** 2, 0);
}
