let answer = "";
let stack = [];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let str = input[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<") {
      answer += stack.reverse().join("");
      stack = [];
      while (str[i] !== ">") stack.push(str[i++]);
      stack.push(str[i]);
      answer += stack.join("");
      stack = [];
    } else if (str[i] === " ") {
      answer += `${stack.reverse().join("")} `;
      stack = [];
    } else {
      stack.push(str[i]);
    }
  }
  if (stack.length) answer += stack.reverse().join("");
  console.log(answer);

  process.exit();
});
