function solution(s) {
  if (s.length === 4 || s.length === 6) {
    if (isNaN(+s)) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}
