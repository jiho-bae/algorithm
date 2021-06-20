function solution(n, t, m, p) {
  let num = 0;
  let order = 1;
  let answer = "";
  while (true) {
    const str = num.toString(n);
    for (let s of str) {
      if (order > m) order = 1;
      if (order === p) answer += s;
      if (answer.length === t) return answer.toUpperCase();
      order++;
    }
    num++;
  }
}
