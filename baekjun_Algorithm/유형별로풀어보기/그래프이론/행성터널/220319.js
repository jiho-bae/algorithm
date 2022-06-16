function sol(input) {
  const N = +input[0];
  const parent = Array.from({ length: N + 1 }, (_, i) => i);
  const obj = {
    x: [],
    y: [],
    z: [],
  };

  input.slice(1).map((str, i) => {
    const [x, y, z] = str.split(' ').map(Number);
    obj.x.push([x, i]);
    obj.y.push([y, i]);
    obj.z.push([z, i]);
  });

  Object.values(obj).forEach((elem) => elem.sort((a, b) => a[0] - b[0]));

  const nodes = [];

  for (let i = 0; i < N - 1; i++) {
    Object.values(obj).forEach((elem) => {
      nodes.push([elem[i + 1][0] - elem[i][0], elem[i][1], elem[i + 1][1]]);
    });
  }

  nodes.sort((a, b) => a[0] - b[0]);

  let cnt = 0;

  for (let i = 0; i < (N - 1) * 3; i++) {
    const [dist, from, to] = nodes[i];
    if (findParent(parent, from) !== findParent(parent, to)) {
      unionParent(parent, from, to);
      cnt += dist;
    }
  }

  return cnt;
}

const input = [
  '5',
  '11 -15 -15',
  '14 -5 -15',
  '-1 -1 -5',
  '10 -4 -1',
  '19 -4 19',
];

console.log(sol(input));

function findMinPath(a, b) {
  const [sx, sy, sz] = a;
  const [tx, ty, tz] = b;

  return Math.min(Math.abs(sx - tx), Math.abs(sy - ty), Math.abs(sz - tz));
}

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
