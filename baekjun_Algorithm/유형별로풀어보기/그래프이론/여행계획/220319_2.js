function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const maps = input.slice(1, 1 + N).map((str) => str.split('').map(Number));
  const path = input[N + 1].split('').map((num) => Number(num) - 1);

  let answer = 'YES';
  const parent = Array.from({ length: N }, (_, i) => i);

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

  maps.forEach((row, i) =>
    row.forEach((cell, j) => {
      if (cell === 1) unionParent(parent, i, j);
    })
  );

  let root = parent[path[0]];
  for (let i = 1; i < path.length; i++) {
    if (parent[path[i]] !== root) {
      answer = 'NO';
      break;
    }
  }

  return answer;
}

const input = ['5 4', '01011', '10110', '01000', '11000', '10000', '2343'];
console.log(sol(input));

const input2 = ['5 4', '01011', '10010', '00000', '11000', '10000', '2343'];
console.log(sol(input2));
