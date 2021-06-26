function solution(msg) {
  const answer = [];
  const dict = [0];
  for (let i = 0; i < 26; i++) {
    dict.push(String.fromCharCode(i + 65));
  }

  let idx = 0;
  let w = msg[idx];
  while (true) {
    let c = msg[++idx];
    if (c === undefined) {
      answer.push(dict.indexOf(w));
      return answer;
    }
    if (dict.includes(w) && !dict.includes(w + c)) {
      answer.push(dict.indexOf(w));
      dict.push(w + c);
      w = c;
    } else {
      w += c;
    }
  }
}
