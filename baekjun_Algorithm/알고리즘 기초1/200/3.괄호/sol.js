let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let len = parseInt(input[0]);
let answer = "";

out: for (let i = 1; i <= len; i++) {
  let stack = [];
  for (let x of input[i]) {
    if (x === "(") {
      stack.push(x);
      continue;
    }
    if (!stack.length) {
      answer += "NO\n";
      continue out;
    } else stack.pop();
  }
  if (!stack.length) answer += "YES\n";
  else answer += "NO\n";
}
console.log(answer);
