function sol(input) {
  const G = +input[0];
  const P = +input[1];
  const planes = input.slice(2).map(Number);
  const parent = Array.from({ length: G + 1 }, (_, i) => i);
  let cnt = 0;

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

  for (let i = 0; i < P; i++) {
    const root = findParent(parent, planes[i]);

    if (root === 0) break;
    unionParent(parent, root, root - 1);
    cnt += 1;
  }

  return cnt;
}

const input = ['4', '3', '4', '1', '1'];
console.log(sol(input));

const input2 = ['10', '6', '3', '4', '1', '7', '4', '9'];
console.log(sol(input2));
