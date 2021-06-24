function solution(n) {
  const arr = Array.from({ length: n }, (_, i) => new Array(i + 1));
  let [x, y] = [-1, 0];
  let num = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) arr[++x][y] = ++num;
    for (let i = 0; i < n - 1; i++) arr[x][++y] = ++num;
    for (let i = 0; i < n - 2; i++) arr[--x][--y] = ++num;
    n -= 3;
  }
  let answer = [];
  arr.forEach((v) => answer.push(...v));
  return answer;
}
