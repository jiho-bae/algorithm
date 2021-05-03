const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  let n = parseInt(input[0]);
  let series = input[1].split(" ").map((v) => +v);
  let stack = [];
  let answer = Array.from({ length: n }, () => -1);

  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && series[stack[stack.length - 1]] < series[i]) {
      answer[stack.pop()] = series[i];
    }
    stack.push(i);
  }

  while (stack.length !== 0) {
    answer[stack.pop()] = -1;
  }
  console.log(answer.join(" "));
  process.exit();
});
