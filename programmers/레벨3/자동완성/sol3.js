// 사전을 만들어보자.
// for of..

function solution(words) {
  const dict = {};
  const len = words.length;
  var answer = 0;

  for (let i = 0; i < len; i++) {
    const word = words[i];
    let dictLoop = dict;

    for (let char of word) {
      if (dictLoop[char]) dictLoop[char].cnt += 1;
      else dictLoop[char] = { cnt: 1 };

      dictLoop = dictLoop[char];
    }
  }

  for (let i = 0; i < len; i++) {
    const word = words[i];
    let dictLoop = dict;
    let cnt = 0;

    for (let char of word) {
      cnt += 1;
      if (dictLoop[char].cnt === 1) break;
      dictLoop = dictLoop[char];
    }

    answer += cnt;
  }

  return answer;
}
