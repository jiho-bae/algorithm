function solution(n, weak, dist) {
  const flattenWeak = [...weak, ...weak.map((elem) => elem + n)];
  const weakLen = weak.length;
  const distLen = dist.length;
  const visits = new Array(distLen).fill(0);
  let answer = distLen + 1;

  if (weakLen === 1) return 1;

  function permutation(L, arr) {
    if (L === distLen) {
      for (let i = 0; i < weakLen; i++) {
        const end = i + weakLen;
        let left = i;
        let cnt = 0;

        for (let elem of arr) {
          if (left >= end) break;
          cnt += 1;
          const maxDist = elem + flattenWeak[left];

          while (left < end && maxDist >= flattenWeak[left]) {
            left++;
          }
        }

        if (left < end) continue;

        answer = Math.min(answer, cnt);
      }
      return;
    }

    for (let i = 0; i < distLen; i++) {
      if (visits[i]) continue;
      visits[i] = 1;
      permutation(L + 1, [...arr, dist[i]]);
      visits[i] = 0;
    }
  }

  permutation(0, []);

  return answer === distLen + 1 ? -1 : answer;
}
