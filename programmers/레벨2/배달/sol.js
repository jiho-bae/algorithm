function solution(N, road, K) {
  if (N === 1) return 1;
  const adjArr = Array.from({ length: N + 1 }, () => new Array());
  road.forEach(([from, to, dist]) => {
    adjArr[from].push([to, dist]);
    adjArr[to].push([from, dist]);
  });

  let minDist = Array.from({ length: N + 1 }, () => K + 1);
  function bfs() {
    const queue = [[1, 0, { 1: 1 }]];
    minDist[1] = 0;
    while (queue.length) {
      const [now, dist, pass] = queue.shift();
      if (minDist[now] > dist) minDist[now] = dist;
      for (let [next, nextDist] of adjArr[now]) {
        if (dist + nextDist > minDist[next]) continue;
        if (!pass[next]) {
          queue.push([next, dist + nextDist, { ...pass, next: 1 }]);
        }
      }
    }
  }
  bfs();

  minDist = minDist.slice(1);
  let answer = minDist.filter((d) => d <= K).length;
  return answer;
}
