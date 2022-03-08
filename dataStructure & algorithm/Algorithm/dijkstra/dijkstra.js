// 시간복잡도 : O(V^2) 이며, V= Node 개수

const graph = []; // 노드 연결 정보를 포함한 그래프로 [Node, distance] 값을 가짐.
let distance = []; // 노드 최단거리 배열
const visited = []; // 노드 방문 배열
const N = 10000; // 노드 갯수

function initDistance(start) {
  distance = new Array(N).fill(10001);
  distance[start] = 0;
}

function getSmallestNode() {
  let min = Infinity;
  let index = 0;

  for (let i = 0; i < N; i++) {
    if (distance[i] < min && !visited[i]) {
      min = distance[i];
      index = i;
    }
  }

  return index;
}

function dijkstra(start) {
  distance[start] = 0;
  visited[start] = 1;
  for (let [nextNode, dist] of graph[start]) {
    distance[nextNode] = dist;
  }

  for (let i = 0; i < N; i++) {
    const nowIndex = getSmallestNode();
    visited[nowIndex] = 1;

    for (let [nextNode, dist] of graph[nowIndex]) {
      const cost = distance[nowIndex] + dist;

      if (cost < distance[nextNode]) distance[nextNode] = cost;
    }
  }
}
