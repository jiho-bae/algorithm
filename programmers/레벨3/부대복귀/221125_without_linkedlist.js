/**
 * linkedlist를 통해 문제는 풀었다.
 * linkedlist 없이 bfs를 하는 방법..
 */

// 큐에 배열을 넣지 않고, 현재인덱스와 shortPath를 이용했다.
// 이미 갱신된 최단거리( shorPath[desti] >=0 ) 는 더이상 볼 필요가 없다.

function solution(n, roads, sources, destination) {
  const relations = Array.from({ length: n + 1 }, () => new Array());

  roads.forEach(([a, b]) => {
    relations[a].push(b);
    relations[b].push(a);
  });

  const shortPath = new Array(n + 1).fill(-1);
  shortPath[destination] = 0;

  function bfs() {
    const queue = [destination];

    while (queue.length) {
      const cur = queue.shift();

      relations[cur]
        .filter((desti) => shortPath[desti] < 0)
        .forEach((desti) => {
          shortPath[desti] = shortPath[cur] + 1;
          queue.push(desti);
        });
    }
  }
  bfs();

  return sources.map((source) => shortPath[source]);
}
