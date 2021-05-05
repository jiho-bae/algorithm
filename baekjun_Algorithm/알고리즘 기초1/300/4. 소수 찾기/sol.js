// sqrt(n) 까지만 돌면 된다.

const sol = ([n, str]) => {
  let cnt = 0;
  str.split(" ").map((v) => {
    v = +v;
    if (v === 1) return;
    for (let i = 2; i <= Math.sqrt(v); i++) {
      if (v % i === 0) return;
    }
    cnt++;
  });
  return cnt;
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
