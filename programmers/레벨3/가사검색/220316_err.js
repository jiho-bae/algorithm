function solution(words, queries) {
  const answer = [];
  let target = -1;
  const wordsObj = {};

  function findFrontQuestion(query, start, end) {
    if (start > end) return;
    const mid = Math.floor((start + end) / 2);

    if (query[mid] === '?' && query[mid + 1] !== '?') {
      target = mid;
      return;
    }

    if (query[mid] === '?' && query[mid + 1] === '?')
      findFrontQuestion(query, mid + 1, end);
    else findFrontQuestion(query, start, mid - 1);
  }

  function findBackQuestion(query, start, end) {
    if (start > end) return;
    const mid = Math.floor((start + end) / 2);

    if (query[mid] === '?' && query[mid - 1] !== '?') {
      target = mid;
      return;
    }

    if (query[mid] === '?' && query[mid - 1] === '?')
      findBackQuestion(query, 0, mid - 1);
    else findBackQuestion(query, mid + 1, end);
  }

  for (let word of words) {
    const len = word.length;
    if (wordsObj[len] !== undefined) {
      wordsObj[len].push(word);
    } else wordsObj[len] = [word];
  }

  for (let query of queries) {
    target = -1;
    const front = query[0] === '?';
    const len = query.length;
    let idx = front ? 0 : query.length - 1;
    let cnt = 0;

    if (front) findFrontQuestion(query, 0, query.length - 1);
    else findBackQuestion(query, 0, query.length - 1);

    if (idx > target) [idx, target] = [target, idx];
    const compareStr = front ? query.slice(target + 1) : query.slice(0, idx);

    if (!wordsObj[len]) {
      answer.push(0);
      continue;
    }

    for (let word of wordsObj[len]) {
      const targetStr = front ? word.slice(target + 1) : word.slice(0, idx);
      if (compareStr === targetStr) cnt++;
    }

    answer.push(cnt);
  }

  return answer;
}
