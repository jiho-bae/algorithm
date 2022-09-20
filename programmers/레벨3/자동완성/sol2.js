// 사전을 만들어보자.
// w->a->b->c... 깊이로 가보자.

function solution(words) {
  const dict = {};
  const len = words.length;
  var answer = 0;

  for (let i = 0; i < len; i++) {
    const word = words[i];
    const wordLen = word.length;
    let dictLoop = dict;

    for (let j = 0; j < wordLen; j++) {
      const char = word[j];

      if (dictLoop[char]) {
        dictLoop[char].cnt += 1;
      } else {
        dictLoop[char] = { cnt: 1 };
      }
      dictLoop = dictLoop[char];
    }
  }

  for (let i = 0; i < len; i++) {
    const word = words[i];
    const wordLen = word.length;
    let detect = 0;
    let dictLoop = dict;

    for (let j = 0; j < wordLen; j++) {
      if (detect) break;

      const char = word[j];

      if (dictLoop[char].cnt === 1) {
        answer += j + 1;
        detect = 1;
      } else dictLoop = dictLoop[char];
    }

    if (!detect) answer += wordLen;
  }

  return answer;
}
