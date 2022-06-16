const sol = ([n, input]) => {
  let stack = [];
  let answer = Array.from({ length: +n }, () => -1);
  let series = input.split(' ').map((v) => +v);
  series.map((value, idx) => {
    while (stack.length !== 0 && series[stack[stack.length - 1]] < value) {
      answer[stack.pop()] = value;
    }
    stack.push(idx);
  });
  while (stack.length !== 0) {
    answer[stack.pop()] = -1;
  }
  console.log(answer.join(' '));
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => input.push(line)).on('close', () => {
  sol(input);
  process.exit();
});
