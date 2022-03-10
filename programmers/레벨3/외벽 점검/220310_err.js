// 테케 25개 중 10개정도에서 런타임 에러 발생.. - -

function solution(n, weak, dist) {
  const answer = [];
  const twoWeak = [...weak, ...weak.map((elem) => elem + n)];
  const weakLen = weak.length;
  const distLen = dist.length;
  const visits = new Array(distLen).fill(0);

  if (weakLen === 1) return 1;

  function permutation(L, randomDist, i) {
    if (L === distLen) {
      const end = i + weakLen;
      let left = i;
      let cnt = 0;

      for (let elem of randomDist) {
        if (left >= end) break;
        cnt += 1;
        const maxDist = elem + twoWeak[left];

        while (left < end && maxDist >= twoWeak[left]) {
          left++;
        }
      }

      if (left < end) return;

      answer.push(cnt);
      return;
    }

    for (let j = 0; j < distLen; j++) {
      if (visits[j]) continue;
      visits[j] = 1;
      permutation(L + 1, [...randomDist, dist[j]], i);
      visits[j] = 0;
    }
  }

  for (let i = 0; i < weakLen; i++) {
    permutation(0, [], i);
  }

  return answer.length === 0 ? -1 : Math.min(...answer);
}
