const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const sol = ([n, ...str]) => {
  let answer = "";
  for (let x of str) {
    let [a, b] = x.split(" ").map((v) => +v);
    answer += `${(a * b) / gcd(a, b)}\n`;
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
