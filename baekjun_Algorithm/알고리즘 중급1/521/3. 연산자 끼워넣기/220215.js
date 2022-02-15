function calculate(oper1, oper2, opt) {
  switch (opt) {
    case 0:
      return oper1 + oper2;
    case 1:
      return oper1 - oper2;
    case 2:
      return oper1 * oper2;
    case 3:
      return oper1 < 0
        ? -Math.floor(-oper1 / oper2)
        : Math.floor(oper1 / oper2);
  }
}

function sol(input) {
  const N = +input[0];
  const operations = input[1].split(' ').map(Number);
  const operators = input[2].split(' ').map(Number);
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  function dfs(L, result) {
    if (L === N) {
      max = Math.max(max, result);
      min = Math.min(min, result);
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (!operators[i]) continue;
      operators[i]--;
      dfs(L + 1, calculate(result, operations[L], i));
      operators[i]++;
    }
  }

  dfs(1, operations[0]);

  return [max, min].join('\n');
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
