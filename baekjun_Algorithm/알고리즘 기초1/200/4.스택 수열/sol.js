let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const len = input[0];
const stack = [];
let answer = "";
let number = 1;

out: for (let i = 1; i <= len; i++) {
  input[i] = parseInt(input[i]);
  while (number <= len) {
    if (input[i] === stack[stack.length - 1]) {
      stack.pop();
      answer += "-\n";
      continue out;
    } else {
      stack.push(number++);
      answer += "+\n";
    }
  }
  if (stack.pop() === input[i]) answer += "-\n";
  else {
    answer = "NO";
    break out;
  }
}
console.log(answer);
