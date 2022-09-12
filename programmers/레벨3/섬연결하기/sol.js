/*
    섬의 거리 cost를 기준으로 오름차순 정렬 후 
    크루스칼 알고리즘을 적용한다.
*/

function solution(n, costs) {
  let answer = 0;
  const length = costs.length;
  const parent = Array.from({ length }, (_, i) => i);

  costs.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < length; i++) {
    const [from, to, cost] = costs[i];
    if (findParent(parent, from) !== findParent(parent, to)) {
      unionParent(parent, from, to);
      answer += cost;
    }
  }

  return answer;
}

function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
}

function unionParent(parent, x, y) {
  x = findParent(parent, x);
  y = findParent(parent, y);

  if (x < y) parent[y] = x;
  else parent[x] = y;
}
