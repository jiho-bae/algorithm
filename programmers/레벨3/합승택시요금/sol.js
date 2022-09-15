function solution(n, s, a, b, fares) {
  let answer = Infinity;
  const graph = Array.from({ length: n + 1 }, () =>
    new Array(n + 1).fill(Infinity)
  );

  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  for (let i = 0, len = fares.length; i < len; i++) {
    [from, to, cost] = fares[i];
    graph[from][to] = cost;
    graph[to][from] = cost;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, graph[s][i] + graph[i][a] + graph[i][b]);
  }

  return answer;
}
