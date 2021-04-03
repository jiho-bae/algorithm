function solution(s) {
  return s
    .split("")
    .sort((a, b) => (b > a ? 1 : -1))
    .join("");
}
