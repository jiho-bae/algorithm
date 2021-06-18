function solution(numbers) {
  const N = numbers.length;
  numbers = numbers.split("");
  const arr = [];
  const check = new Array(N).fill(0);

  function dfs(L, str) {
    if (L === N + 1) return;
    if (!arr.includes(+str)) arr.push(+str);
    for (let i = 0; i < N; i++) {
      if (check[i]) continue;
      check[i] = 1;
      dfs(L + 1, str + numbers[i]);
      check[i] = 0;
    }
  }
  dfs(0, "");

  let cnt = 0;
  for (let x of arr) {
    if (x < 2) continue;
    let ok = 1;
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        ok = 0;
        break;
      }
    }
    cnt += ok;
  }
  return cnt;
}
