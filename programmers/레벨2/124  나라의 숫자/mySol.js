function solution(n) {
  let answer = "";
  const arr = [0, 1, 2, 4];
  function DFS(n) {
    if (n === 0) return;

    let a = n % 3;
    if (a === 0) a = 3;
    answer = arr[a] + answer;
    DFS((n - a) / 3);
  }
  DFS(n);
  return answer;
}
