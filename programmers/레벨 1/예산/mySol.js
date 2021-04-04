function solution(d, budget) {
  let sum = 0;
  let count = 0;

  d.sort((a, b) => a - b);

  while (sum <= budget) {
    if (count === d.length || sum + d[count] > budget) break;
    sum += d[count++];
  }

  return count;
}
