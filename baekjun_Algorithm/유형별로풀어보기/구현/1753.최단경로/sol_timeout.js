// 배열크기 20000 * 20000 = 메모리초과.

function sol(input) {
  const [V, E] = input[0].split(' ').map(Number);
  const start = +input[1];

  const graphs = Array.from({ length: V + 1 }, () => new Array(V + 1).fill(Infinity));
  for (let i = 1; i <= V; i++) {
    graphs[i][i] = 0;
  }

  for (let i = 2, iter = input.length; i < iter; i++) {
    const [from, to, w] = input[i].split(' ').map(Number);
    graphs[from][to] = Math.min(graphs[from][to], w);
  }

  for (let k = 1; k <= V; k++) {
    for (let i = 1; i < V; i++) {
      for (let j = i + 1; j <= V; j++) {
        graphs[i][j] = Math.min(graphs[i][j], graphs[i][k] + graphs[k][j]);
      }
    }
  }

  return graphs[start]
    .slice(1)
    .map((e) => {
      return e === Infinity ? 'INF' : e;
    })
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
