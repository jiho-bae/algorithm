function solution(s) {
  const sLen = s.length;
  const halfSLen = Math.floor(sLen / 2);
  let min = sLen;

  for (let i = 1; i <= halfSLen; i++) {
    let start = 0,
      end = i,
      cnt = 0,
      str = "",
      tmp = "";
    while (start < sLen) {
      const tmpStr = s.slice(start, end);
      if (tmp === tmpStr) cnt++;
      else if (tmp !== "" && cnt !== 1) {
        str += `${cnt}${tmp}`;
        tmp = tmpStr;
        cnt = 1;
      } else if (tmp !== "") {
        str += tmp;
        tmp = tmpStr;
      } else {
        tmp = tmpStr;
        cnt++;
      }
      start = end;
      end += i;
    }
    if (cnt !== 1) str += `${cnt}${tmp}`;
    else str += tmp;
    min = Math.min(min, str.length);
  }
  return min;
}
