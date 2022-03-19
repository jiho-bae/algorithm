function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const maps = input.slice(1, 1 + N).map((str) => str.split('').map(Number));
  const path = input[N + 1].split('').map((num) => num - 1);
  let answer = 'YES';
  const roots = Array.from({ length: N }, (_, i) => i);

  maps.forEach((row, i) =>
    row.forEach((cell, j) => {
      if (cell === 1) {
        if (i < j) {
          roots[j] = roots[i];
        } else {
          roots[i] = roots[j];
        }
      }
    })
  );

  let start = roots[path[0]];
  for (let i = 1; i < path.length; i++) {
    if (roots[path[i]] !== start) {
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
