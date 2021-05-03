const sol = ([n, input]) => {
  let answer = Array.from({ length: +n }, () => -1);
  let stack = [];
  let dict = {};
  let series = input
    .split(" ")
    .map((v) => +v)
    .map((v) => {
      dict[v] = dict[v] ? dict[v] + 1 : 1;
      return v;
    });
  series.map((val, idx) => {
    while (
      stack.length > 0 &&
      dict[series[stack[stack.length - 1]]] < dict[val]
    ) {
      answer[stack.pop()] = val;
    }
    stack.push(idx);
  });

  console.log(answer.join(" "));
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  sol(input);
  process.exit();
});
