function solution(n, edge) {
  const adjList = Array.from({ length: n + 1 }, () => new Array());
  const distance = new Array(n + 1).fill(Infinity);
  distance[1] = 0;

  for (let [from, to] of edge) {
    adjList[from].push(to);
    adjList[to].push(from);
  }

  adjList.forEach((list) => list.sort((a, b) => a - b));

  function bfs() {
    const queue = [];
    queue.push(1);
    const visits = new Array(n + 1).fill(0);
    visits[1] = 1;

    while (queue.length) {
      const current = queue.shift();
      const nextNodes = adjList[current];

      for (let nextNode of nextNodes) {
        if (visits[nextNode]) continue;
        visits[nextNode] = 1;
        distance[nextNode] = Math.min(
          distance[nextNode],
          distance[current] + 1
        );
        queue.push(nextNode);
      }
    }
  }

  bfs();

  const maxDistance = Math.max(...distance.slice(1));
  const answer = distance.filter((elem) => elem === maxDistance).length;

  return answer;
}
