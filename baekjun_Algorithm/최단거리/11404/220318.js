function sol(input) {
  const N = +input[0];
  const M = +input[1];
  const adjMatrix = Array.from({ length: N }, () =>
    new Array(N).fill(Infinity)
  );

  input.slice(2, 2 + M).forEach((str) => {
    const [from, to, dist] = str.split(' ').map(Number);
    if (dist < adjMatrix[from - 1][to - 1]) adjMatrix[from - 1][to - 1] = dist;
  });

  for (let i = 0; i < N; i++) {
    adjMatrix[i][i] = 0;
  }

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        adjMatrix[i][j] = Math.min(
          adjMatrix[i][j],
          adjMatrix[i][k] + adjMatrix[k][j]
        );
      }
    }
  }

  return adjMatrix
    .map((row) => row.map((elem) => (elem === Infinity ? 0 : elem)))
    .map((row) => row.join(' '))
    .join('\n');
}

const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
