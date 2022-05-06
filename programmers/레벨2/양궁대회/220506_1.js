/* 
 isSmallScoreArr에서 scoreArr[i] < answer[i] 시에도 true를 반환해서..
 정답이 안나오던 것이었음..
*/

function solution(n, info) {
  let answer = new Array(11).fill(0);
  let answerDiff = Number.MIN_SAFE_INTEGER;

  function isSmallScoreArr(scoreArr) {
    for (let i = 10; i >= 0; i--) {
      if (scoreArr[i] > answer[i]) return true;
      else if (scoreArr[i] < answer[i]) return false;
    }
  }

  function dfs(L, idx, ryanInfo) {
    if (idx === 11 && L < n) {
      ryanInfo[10] = n - L;
      L = n;
    }

    if (L === n) {
      let appeachScore = 0;
      let ryanScore = 0;

      ryanInfo.forEach((elem, i) => {
        if (!elem && !info[i]) return;

        const score = 10 - i;
        if (info[i] - elem >= 0) appeachScore += score;
        else if (info[i] - elem < 0) ryanScore += score;
      });

      const diff = ryanScore - appeachScore;

      if (answerDiff < diff) {
        answerDiff = diff;
        answer = ryanInfo;
      } else if (answerDiff === diff) {
        if (isSmallScoreArr(ryanInfo)) answer = ryanInfo;
      }
      return;
    }

    const appeachArrowLength = info[idx];

    if (n - L >= appeachArrowLength + 1) {
      ryanInfo[idx] = appeachArrowLength + 1;
      dfs(L + appeachArrowLength + 1, idx + 1, [...ryanInfo]);
      ryanInfo[idx] = 0;
    }
    dfs(L, idx + 1, [...ryanInfo]);
  }

  dfs(0, 0, new Array(11).fill(0));

  if (answerDiff <= 0) return [-1];
  return answer;
}
