const sol = (str) => {
  let cntArr = Array.from({ length: 26 }, () => -1);
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (cntArr[x.charCodeAt() - 97] === -1) {
      cntArr[x.charCodeAt() - 97] = i;
    }
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
