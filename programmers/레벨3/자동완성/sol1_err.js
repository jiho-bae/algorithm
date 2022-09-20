// 사전을 만들어보자.
// core dumped 에러가 난다.
// 객체 키가 너무 길어서 그런듯.

function solution(words) {
  const dict = {};
  const len = words.length;
  var answer = 0;

  for (let i = 0; i < len; i++) {
    const word = words[i];
    const wordLen = word.length;

    for (let j = 0; j < wordLen; j++) {
      const str = word.slice(0, j + 1);
      dict[str] = dict[str] ? dict[str] + 1 : 1;
    }
  }

  for (let i = 0; i < len; i++) {
    const word = words[i];
    const wordLen = word.length;
    let cnt = 0;
    let detect = 0;

    for (let j = 0; j < wordLen; j++) {
      if (detect) break;

      const str = word.slice(0, j + 1);
      cnt += 1;

      if (dict[str] === 1) {
        answer += cnt;
        detect = 1;
      }
    }

    if (!detect) answer += wordLen;
  }

  return answer;
}
