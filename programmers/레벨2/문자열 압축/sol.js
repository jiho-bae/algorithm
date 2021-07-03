function solution(s) {
  const sLen = s.length;
  const halfSLen = Math.floor(sLen / 2);
  let min = sLen;

  for (let idx = 1; idx <= halfSLen; idx++) {
    let startIdx = 0,
      cnt = 0,
      str = "",
      tmp = "";
    while (startIdx < sLen) {
      const tmpStr = s.slice(startIdx, startIdx + idx);
      startIdx += idx;
      if (tmp === tmpStr) {
        cnt++;
        continue;
      }
      if (tmp !== "") {
        if (cnt !== 1) {
          str += `${cnt}${tmp}`;
          cnt = 1;
        } else str += tmp;
      } else cnt++;
      tmp = tmpStr;
    }

    str += cnt !== 1 ? `${cnt}${tmp}` : tmp;
    min = Math.min(min, str.length);
  }
  return min;
}
