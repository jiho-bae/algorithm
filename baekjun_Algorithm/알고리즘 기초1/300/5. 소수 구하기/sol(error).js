// 에라토스테네스의 체
const sol = (str) => {
  let [m, n] = str.split(" ").map((v) => +v);
  let arr = [];
  let answer = [];
  for (let i = m; i <= n; i++) {
    arr[i] = i;
  }
  arr[1] = 0;
  for (let i = m; i <= n; i++) {
    if (arr[i] === 0) continue;
    for (let j = 2 * i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  for (let i = m; i <= n; i++) {
    if (arr[i] !== 0) answer.push(arr[i]);
  }
  return answer.join("\n");
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
