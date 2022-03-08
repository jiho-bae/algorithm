// 개선된 다익스트라 : 시간복잡도 O(ElogV)이며, E=간선 개수, V=노드 개수
// 최단거리가 가장 짧은 노드를 '힙 자료구조'를 이용해 찾는다.
// 힙 자료구조는 우선순위 큐 구현에 사용하곤 한다.

// 최소 힙은 값이 낮은 데이터가 먼저 삭제, 최대 힙은 값이 높은 데이터가 먼저 삭제된다.
// 최소 힙을 최대 힙처럼 사용하기 위해선, 값에 음 부호를 부여하고 꺼낼 때 다시 음수 부호를 부여하면 되겠다.

const graph = []; // 노드 연결 정보를 포함한 그래프로 [Node, distance] 값을 가짐.
let distance = []; // 노드 최단거리 배열
const visited = []; // 노드 방문 배열
const N = 10000; // 노드 갯수

class PriorityQueue {
  // pq 구현하기
  // method : push, pop
}

function initDistance(start) {
  distance = new Array(N).fill(10001);
  distance[start] = 0;
}

function improvedDijkstra(start) {
  const pq = new PriorityQueue();
  pq.push([0, start]);
  distance[start] = 0;

  while (pq.length) {
    const [dist, now] = pq.pop();

    if (distance[now] < dist) continue;

    for (let [nextNode, nextDist] of graph[now]) {
      const cost = dist + nextDist;

      if (cost < distance[nextNode]) {
        distance[nextNode] = cost;
        pq.push([cost, nextNode]);
      }
    }
  }
}
