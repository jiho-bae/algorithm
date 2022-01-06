function solution(n) {
  const target = n.toString(2).split('1').length;
  let num = n + 1;

  while (1) {
    const cnt = num.toString(2).split('1').length;
    if (cnt === target) break;
    num++;
  }
  return num;
}
