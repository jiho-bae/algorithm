function solution(n, s) {
  if (n === 1) return [s];
  if (n > s) return [-1];

  const share = Math.floor(s / n);
  const rest = s % n;
  const answer = new Array(n).fill(share);

  for (let i = n - 1; i >= n - rest; i--) {
    answer[i]++;
  }

  return answer;
}
