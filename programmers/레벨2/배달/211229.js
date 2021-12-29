function solution(N, road, K) {
  if (N === 1) return 1;
  const adjObj = {};
  Array.from({ length: N }, (_, i) => i + 1).forEach(
    (val) => (adjObj[val] = {})
  );
  road.forEach(([from, to, dist]) => {
    if (adjObj[from][to] < dist) return;
    adjObj[from][to] = dist;
    adjObj[to][from] = dist;
  });

  const minDist = Array.from({ length: N + 1 }, () => K + 1);
  function bfs() {
    const queue = [[1, 0, new Set([1])]];
    minDist[1] = 0;
    while (queue.length) {
      const [now, dist, pass] = queue.shift();
      if (minDist[now] > dist) minDist[now] = dist;
      for (let [next, nextDist] of Object.entries(adjObj[now])) {
        if (dist + nextDist >= minDist[next]) continue;
        if (!pass.has(next)) {
          queue.push([next, dist + nextDist, new Set([...pass, next])]);
        }
      }
    }
  }
  bfs();

  const answer = minDist.slice(1).filter((val) => val <= K).length;
  return answer;
}
