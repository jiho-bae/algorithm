function solution(n, t, m, p) {
  let num = 0;
  let order = 1;
  let answer = '';

  while (1) {
    const convertedNumber = num.toString(n);
    for (let cn of convertedNumber) {
      if (order === p) answer += cn;
      if (answer.length === t) return answer.toUpperCase();
      if (++order > m) order = 1;
    }
    num++;
  }
}
