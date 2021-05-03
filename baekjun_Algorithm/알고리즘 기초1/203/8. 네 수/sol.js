const sol = (str) => {
  let arr = str.split(" ");
  return +(arr[0] + arr[1]) + +(arr[2] + arr[3]);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  console.log(sol(input[0]));
  process.exit();
});
