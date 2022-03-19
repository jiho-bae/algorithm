function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const roads = input.slice(1).map((str) => str.split(' ').map(Number));

  roads.sort((a, b) => a[2] - b[2]);

  const length = roads.length;
  const parent = Array.from({ length }, (_, i) => i);
  let total = 0;
  let cost = 0;

  roads.forEach((line) => {
    const [from, to, len] = line;
    total += len;

    if (findParent(parent, from) !== findParent(parent, to)) {
      unionParent(parent, from, to);
      cost += len;
    }
  });

  return total - cost;
}

const input = [
  '7 11',
  '0 1 7',
  '0 3 5',
  '1 2 8',
  '1 3 9',
  '1 4 7',
  '2 4 5',
  '3 4 15',
  '3 5 6',
  '4 5 8',
  '4 6 9',
  '5 6 11',
];

console.log(sol(input));

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
