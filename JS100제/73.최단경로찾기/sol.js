/*
다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다. 

두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요. 

이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.
*/

function solution(graph, start, end) {
  let queue = [start];
  let visited = [start];
  let cnt = -1;
  while (queue.length !== 0) {
    cnt++;
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let n = queue.shift();
      if (n === end) return cnt;

      for (let x of graph[n]) {
        if (!visited.includes(x)) {
          queue.push(x);
          visited.push(x);
        }
      }
    }
  }
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};
console.log(solution(graph, "A", "F"));
