// 정답 배열들을 우선 모아두고 정렬
// 낮은 점수를 많이 맞추면 0번 인덱스에 위치하도록.

function solution(n, info) {
  let answer = new Array(11).fill(0);
  let scoreDiff = Number.MIN_SAFE_INTEGER;

  function dfs(L, idx, scoreArr) {
    if (idx === 11 && L < n) {
      scoreArr[10] = n - L;
      L = n;
    }

    if (L === n) {
      let appeach = 0;
      let ryan = 0;

      scoreArr.forEach((elem, i) => {
        if (!elem && !info[i]) return;

        const score = 10 - i;
        if (info[i] - elem >= 0) appeach += score;
        else if (info[i] - elem < 0) ryan += score;
      });

      const diff = ryan - appeach;
      if (diff <= 0) return;

      if (scoreDiff < diff) {
        scoreDiff = diff;
        answer = [scoreArr];
      } else if (scoreDiff === diff) {
        answer.push([...scoreArr]);
      }
      return;
    }

    const infoCnt = info[idx];
    if (n - L >= infoCnt + 1) {
      scoreArr[idx] = infoCnt + 1;
      dfs(L + infoCnt + 1, idx + 1, [...scoreArr]);
      scoreArr[idx] = 0;
    }
    dfs(L, idx + 1, [...scoreArr]);
  }

  dfs(0, 0, [...new Array(11).fill(0)]);

  if (scoreDiff <= 0) return [-1];

  if (answer.length > 1) {
    answer.sort((a, b) => {
      for (let i = 10; i >= 0; i--) {
        if (a[i] !== b[i]) return b[i] - a[i];
      }
      return 0;
    });
  }
  return answer[0];
}
