function sol([n, ...input]) {
  n = +n;
  input = input.map((str) => str.split(' ').map(Number));
  input.unshift(0);
  let maxProfit = Number.MIN_SAFE_INTEGER;

  function recursion(profit, date) {
    maxProfit = Math.max(maxProfit, profit);

    for (let i = date; i <= n; i++) {
      const nextDate = i + input[i][0];
      if (nextDate <= n + 1) {
        recursion(profit + input[i][1], nextDate);
      }
    }
  }

  recursion(0, 1);

  return maxProfit;
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
