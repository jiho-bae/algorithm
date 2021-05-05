const gcd = (a, b) => {
  let c;
  while (b !== 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
};

const gcd2 = (a, b) => (b ? gcd2(b, a % b) : a);

const sol = (str) => {
  let [a, b] = str.split(" ").map((v) => +v);
  let answer;
  if (a > b) [a, b] = [b, a];
  let GCD = gcd2(a, b);
  let LCM;

  LCM = (a * b) / GCD;
  answer = `${GCD}\n${LCM}`;
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
