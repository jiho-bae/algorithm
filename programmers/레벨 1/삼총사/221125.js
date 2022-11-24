function solution(number) {
  var answer = 0;

  function dfs(L, sum, before) {
    if (L === 3) {
      if (sum === 0) answer += 1;
      return;
    }

    for (let i = before + 1; i < number.length; i++) {
      dfs(L + 1, sum + number[i], i);
    }
  }

  dfs(0, 0, -1);

  return answer;
}
