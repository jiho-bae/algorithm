const sol = (str) => {
  let cntArr = Array.from({ length: 26 }, () => 0);
  for (let x of str) {
    cntArr[x.charCodeAt() - 97]++;
  }
  return cntArr.join(" ");
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
