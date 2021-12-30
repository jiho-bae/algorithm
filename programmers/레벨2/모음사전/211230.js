function solution(word) {
  const alphabets = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  const numbers = [781, 156, 31, 6, 1];
  let cnt = 0;
  cnt += word.length;
  [...word].forEach((w, i) => (cnt += numbers[i] * alphabets[w]));

  return cnt;
}
