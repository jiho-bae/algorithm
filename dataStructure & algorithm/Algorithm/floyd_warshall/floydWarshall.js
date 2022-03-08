// 시간복잡도가 O(N^3)을 나타내는 방식
// 모든 노드에서 다른 모든 노드까지의 최단거리를 구할 수 있다.
// X->Y, Y->X 노드까지의 거리는 서로 다르므로, 2차원 배열을 선언해야 한다.
// 기본적으로 X->Y까지의 거리와 X-> 중간노드 -> Y 까지의 거리 중 최솟값을 취한다.

// 노드 갯수
const N = 100;
// 간선 갯수
const M = 100;

// 노드들의 거리 정보를 포함하며, 2차원 배열, 처음에는 무한대로 초기화
const graph = Array.from({ length: N }, () => new Array(N).fill(Infinity));

function initMoveMyself() {
  for (let i = 0; i < N; i++) {
    graph[i][i] = 0;
  }
}

function initDistance(input) {
  // 입력값 기반으로 X->Y까지의 거리값 초기화
}

function floydWarshall() {
  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        // i->j, i->k->j 중 최솟값을 i->j로 삼기
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }
}
