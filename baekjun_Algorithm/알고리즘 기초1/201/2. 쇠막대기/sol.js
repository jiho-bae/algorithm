let stack = [];
let cnt = 0;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let ironBar = input[0];
  for (let i = 0; i < ironBar.length; i++) {
    if (ironBar[i] === "(") stack.push(ironBar[i]);
    else {
      stack.pop();
      ironBar[i - 1] === ")" ? cnt++ : (cnt += stack.length);
    }
  }
  console.log(cnt);
  process.exit();
});
