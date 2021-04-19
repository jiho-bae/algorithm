function solution(numbers, target) {
  let cnt = 0;
  const len = numbers.length;

  function DFS(L, sum) {
    if (L === len) {
      if (sum === target) {
        cnt++;
      }
      return;
    }

    DFS(L + 1, sum + numbers[L]);
    DFS(L + 1, sum - numbers[L]);
  }
  DFS(0, 0);
  return cnt;
}
