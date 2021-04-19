function solution(number, k) {
  let answer = [];
  let len = number.length;
  let max = Number.MIN_SAFE_INTEGER;

  function DFS(L, s, str) {
    if (L === k) {
      max = Math.max(str.replace(/k/g, ""), max);
      return;
    }
    for (let i = s; i < len; i++) {
      DFS(L + 1, i + 1, str.replace(str[i], "k"));
    }
  }
  DFS(0, 0, number);
  return String(max);
}
