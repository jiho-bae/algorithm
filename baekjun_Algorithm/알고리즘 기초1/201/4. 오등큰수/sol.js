const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  let stack = [];
  let dict = {};
  let n = parseInt(input[0]);
  let series = input[1]
    .split(" ")
    .map((v) => +v)
    .map((v) => {
      dict[v] = dict[v] ? dict[v] + 1 : 1;
      return v;
    });
  let answer = Array.from({ length: n }, () => -1);

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      dict[series[stack[stack.length - 1]]] < dict[series[i]]
    ) {
      answer[stack.pop()] = series[i];
    }
    stack.push(i);
  }

  console.log(answer.join(" "));
  process.exit();
});
