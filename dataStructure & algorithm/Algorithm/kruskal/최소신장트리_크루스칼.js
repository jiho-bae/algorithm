// 오름차순 정렬
// 모든 간선마다, 사이클 발생하는지 확인
// 그렇게 최소신장트리를 구할 수 있다.

// [from, to, length] 순으로 주어진다.
const lines = [
  [0, 1, 7],
  [0, 3, 5],
  [1, 2, 8],
  [1, 3, 9],
  [1, 4, 7],
  [2, 4, 5],
  [3, 4, 15],
  [3, 5, 6],
  [4, 5, 8],
  [4, 6, 9],
  [5, 6, 11],
];

// 오름차순 정렬
lines.sort((a, b) => a[2] - b[2]);

// lines의 길이, 부모노드배열, 비용변수
const length = lines.length;
const parent = Array.from({ length }, (_, i) => i);
let cost = 0;

// 모든 간선마다 사이클 확인하고, 사이클이 발생하지 않으면 노드에 포함.
lines.forEach((line) => {
  const [from, to, len] = line;
  if (findParent(parent, from) !== findParent(parent, to)) {
    // from, to의 각 부모를 찾아서 부모가 일치하지 않는다면 합친다.
    unionParent(parent, from, to);
    cost += len;
  }
});

console.log(cost);

// 서로소 찾기, 합치기 함수
function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
}

function unionParent(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);

  if (a < b) parent[b] = a;
  else parent[a] = b;
}
