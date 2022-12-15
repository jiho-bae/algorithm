function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const visits = new Array(N + 1).fill(0);
  const priority = new Array(N + 1).fill().map(() => new Array());

  input.slice(1).forEach((str) => {
    const [high, low] = str.split(' ').map(Number);
    priority[low].push(high);
  });

  priority.forEach((el) => el.sort((a, b) => a - b));

  const answer = [];
  function solve(cur) {
    if (visits[cur]) return;

    if (priority[cur].length > 0) {
      priority[cur].forEach((el) => solve(el));
    }

    answer.push(cur);
    visits[cur] = 1;
  }

  for (let i = 1; i <= N; i++) {
    solve(i);
  }

  return answer.join(' ');
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
