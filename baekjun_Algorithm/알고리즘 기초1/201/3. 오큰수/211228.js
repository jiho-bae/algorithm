const sol = (input) => {
  const n = +input[0];
  const stack = [];
  const series = input[1].split(' ').map(Number);
  const answer = new Array(n).fill('-1');

  series.forEach((num, i) => {
    while (stack.length && series[stack[stack.length - 1]] < num)
      answer[stack.pop()] = num;
    stack.push(i);
  });
  return answer.join(' ');
};

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
