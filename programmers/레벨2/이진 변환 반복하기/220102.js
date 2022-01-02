function solution(s) {
  let zeroCnt = 0;
  let translateCnt = 0;
  let str = s;

  while (str !== '1') {
    const beforeLength = str.length;
    translateCnt += 1;
    str = str.split('0').join('');
    const afterLength = str.length;
    zeroCnt += beforeLength - afterLength;
    str = afterLength.toString(2);
  }
  return [translateCnt, zeroCnt];
}
