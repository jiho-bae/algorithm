function solution(msg) {
  const len = msg.length;
  const answer = [];
  const dict = {};
  for (let i = 0; i < 26; i++) {
    const alphabet = String.fromCharCode(i + 65);
    dict[alphabet] = i + 1;
  }

  let idx = 0;
  let word = msg[idx];
  while (1) {
    if (idx === len - 1) {
      answer.push(dict[word]);
      return answer;
    }

    const nextWord = msg[++idx];
    if (dict[word] && !dict[word + nextWord]) {
      answer.push(dict[word]);
      dict[word + nextWord] = Object.keys(dict).length + 1;
      word = nextWord;
    } else {
      word += nextWord;
    }
  }
}
