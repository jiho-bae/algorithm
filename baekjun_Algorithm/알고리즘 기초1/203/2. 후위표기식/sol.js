const priority = (char) => {
  switch (char) {
    case "*":
    case "/":
      return 2;
    case "+":
    case "/":
      return 1;
    case "(":
    case ")":
      return 0;
  }
  return -1;
};
const sol = (input) => {
  let answer = "";
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let prior = priority(char);
    switch (char) {
      case "+":
      case "-":
      case "*":
      case "/":
        while (
          stack.length !== 0 &&
          priority(stack[stack.length - 1]) >= prior
        ) {
          answer += stack.pop();
        }
        stack.push(char);
        break;
      case "(":
        stack.push(char);
        break;
      case ")":
        while (stack.length !== 0 && stack[stack.length - 1] !== "(") {
          answer += stack.pop();
        }
        stack.pop();
        break;
      default:
        answer += char;
    }
  }

  while (stack.length !== 0) answer += stack.pop();
  console.log(answer);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  sol(input[0]);
  process.exit();
});
