function solution(s) {
  const sLen = s.length / 2;
  return sLen % 2 === 0 ? s.slice(sLen - 1, sLen + 1) : s[Math.floor(sLen)];
}
