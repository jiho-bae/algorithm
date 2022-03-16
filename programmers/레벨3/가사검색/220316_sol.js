function solution(words, queries) {
  const answer = [];
  const wordsObj = {};
  const reverseWordsObj = {};

  function findQuestion(query, start, end) {
    let result = -1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (mid === 0) {
        if (query[mid] === '?') result = 0;
        else result = 1;
        break;
      }

      if (query[mid] === '?') {
        if (query[mid - 1] !== '?') {
          result = mid;
          break;
        } else {
          end = mid - 1;
        }
      } else {
        start = mid + 1;
      }
    }

    return result;
  }

  function findFirstWordIdx(wordArr, start, end, compareStr, questionIdx) {
    let result = -1;

    if (start === end) {
      if (wordArr[0].slice(0, questionIdx) === compareStr) return 0;
      return result;
    }

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const midStr = wordArr[mid].slice(0, questionIdx);

      if (mid === 0) {
        if (midStr === compareStr) {
          result = 0;
        } else if (wordArr[mid + 1].slice(0, questionIdx) === compareStr) {
          result = 1;
        }
        break;
      }

      const prevStr = wordArr[mid - 1].slice(0, questionIdx);

      if (midStr === compareStr) {
        if (prevStr !== compareStr) {
          result = mid;
          break;
        } else {
          end = mid - 1;
        }
      } else if (midStr > compareStr) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return result;
  }

  function findLastWordIdx(wordArr, start, end, compareStr, questionIdx) {
    let result = end;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const midStr = wordArr[mid].slice(0, questionIdx);

      if (mid === wordArr.length - 1) {
        result = mid;
        break;
      }

      const nextStr = wordArr[mid + 1].slice(0, questionIdx);

      if (midStr === compareStr) {
        if (nextStr !== compareStr) {
          result = mid;
          break;
        } else start = mid + 1;
      } else if (midStr > compareStr) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return result;
  }

  for (let word of words) {
    const len = word.length;
    const reverseWord = word.split('').reverse().join('');

    if (!wordsObj[len]) {
      wordsObj[len] = [word];
      reverseWordsObj[len] = [reverseWord];
    } else {
      wordsObj[len].push(word);
      reverseWordsObj[len].push(reverseWord);
    }
  }

  function ascendSort(obj) {
    Object.values(obj).forEach((arr) => arr.sort());
  }

  ascendSort(wordsObj);
  ascendSort(reverseWordsObj);

  for (let query of queries) {
    const len = query.length;
    const isFrontQuestion = query[0] === '?';
    const isAllQuestion = query[0] === '?' && query[len - 1] === '?';

    if (isAllQuestion) {
      answer.push(wordsObj[len] ? wordsObj[len].length : 0);
      continue;
    }

    if (!wordsObj[len]) {
      answer.push(0);
      continue;
    }

    const targetQuery = isFrontQuestion
      ? query.split('').reverse().join('')
      : query;

    const questionIdx = findQuestion(targetQuery, 0, targetQuery.length - 1);

    const compareStr = targetQuery.slice(0, questionIdx);
    const targetWords = isFrontQuestion ? reverseWordsObj[len] : wordsObj[len];
    const endIdx = targetWords.length - 1;
    const args = [targetWords, 0, endIdx, compareStr, questionIdx];

    const firstIdx = findFirstWordIdx(...args);
    const lastIdx = findLastWordIdx(...args);

    answer.push(firstIdx === -1 ? 0 : lastIdx - firstIdx + 1);
  }

  return answer;
}
