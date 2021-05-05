const sol = (str) => {
  let [a, b, c] = str.split(" ").map((v) => +v);
  let answer = "";

  answer += `${(a + b) % c}\n`;
  answer += `${((a % c) + (b % c)) % c}\n`;
  answer += `${(a * b) % c}\n`;
  answer += `${((a % c) * (b % c)) % c}\n`;
  return answer;
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
