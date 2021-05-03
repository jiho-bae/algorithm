// 정규표현식

const sol = (input) => {
  let answer = "";
  for (let x of input) {
    let lCase = x.match(/[a-z]/g) ? x.match(/[a-z]/g).length : 0;
    let uCase = x.match(/[A-Z]/g) ? x.match(/[A-Z]/g).length : 0;
    let num = x.match(/[0-9]/g) ? x.match(/[0-9]/g).length : 0;
    let space = x.match(/\s/g) ? x.match(/\s/g).length : 0;
    answer += `${lCase} ${uCase} ${num} ${space}\n`;
  }
  return answer;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  console.log(sol(input));
  process.exit();
});
