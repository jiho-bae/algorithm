function solution(begin, target, words) {
  const n = begin.length - 1;
  let answer = Number.MAX_SAFE_INTEGER;

  function dfs(L, curWord, prevWords) {
    if (curWord === target) {
      answer = Math.min(answer, L);
      return;
    }

    const candidates = [];
    words.forEach((word) => {
      const cnt = [...word].filter((elem, i) => elem === curWord[i]).length;
      if (cnt === n) candidates.push(word);
    });

    if (!candidates.length) return;

    candidates.forEach((candidate) => {
      if (!prevWords.includes(candidate))
        dfs(L + 1, candidate, [...prevWords, candidate]);
    });
  }

  dfs(0, begin, [begin]);

  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
}
