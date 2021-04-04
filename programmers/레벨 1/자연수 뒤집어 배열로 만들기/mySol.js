function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((val) => +val);
}
