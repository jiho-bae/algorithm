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

function sol([str, ...input]) {
  const N = +str;
  const boards = Array.from({ length: N + 1 }, () => new Array(0));
  const visits = Array.from({ length: N + 1 }, () => 0);
  let cycle = 0;
  let cycleArr;

  input.forEach((distStr) => {
    const [from, to] = distStr.split(' ').map(Number);
    boards[from].push(to);
    boards[to].push(from);
  });

  function dfs(L, current, start, arr) {
    if (cycle) return;

    boards[current].forEach((next) => {
      if (!visits[next]) {
        visits[next] = 1;
        dfs(L + 1, next, start, [...arr, next]);
        visits[next] = 0;
      } else if (L >= 3 && next === start) {
        cycle = 1;
        cycleArr = [...arr];
        return;
      }
    });
  }

  for (let i = 1; i <= N; i++) {
    if (cycle) break;
    visits[i] = 1;
    dfs(1, i, i, [i]);
    visits[i] = 0;
  }

  const answer = [];
  for (let i = 1; i <= N; i++) {
    if (cycleArr.includes(i)) {
      answer.push(0);
      continue;
    }

    const queue = [[i, 0]];
    const check = new Array(N + 1).fill(0);
    check[i] = 1;
    while (queue.length) {
      const [next, distance] = queue.shift();

      if (cycleArr.includes(next)) {
        answer.push(distance);
        break;
      }

      for (let elem of boards[next]) {
        if (check[elem]) continue;
        check[elem] = 1;
        queue.push([elem, distance + 1]);
      }
    }
  }

  return answer.join(' ');
}
