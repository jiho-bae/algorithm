function solution(n, words) {
  const answer = new Set();
  let lastWord = words[0][words[0].length - 1];
  let num = 2,
    turn = 1;
  answer.add(words.shift());

  for (let w of words) {
    if (num > n) {
      num = 1;
      turn++;
    }
    if (answer.has(w) || lastWord !== w[0]) return [num, turn];
    answer.add(w);
    lastWord = w[w.length - 1];
    num++;
  }
  return [0, 0];
}
