const sol = (str) => {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    answer.push(str.slice(i, str.length));
  }
  return answer.sort();
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  sol(input[0]).map((v) => console.log(v));
  process.exit();
});
