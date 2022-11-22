function solution(babbling) {
  let answer = 0;
  const pronunciations = ['aya', 'ye', 'woo', 'ma'];
  const pronPairs = [];

  function dfs(L, joinWord, idxs) {
    if (joinWord.length > 1) {
      pronPairs.push(joinWord);
    }

    if (L === 4) return;

    for (let i = 0; i < 4; i++) {
      if (idxs.includes(i)) continue;

      const word = pronunciations[i];
      dfs(L + 1, joinWord + word, [...idxs, i]);
    }
  }

  dfs(0, '', []);

  pronPairs.forEach((pronPair) => {
    babbling.forEach((babb) => {
      if (pronPair === babb) answer += 1;
    });
  });

  return answer;
}
