const sol = ([n, expression, ...input]) => {
  let stack = [];
  let match = {};
  input.map((val, idx) => {
    let char = String.fromCharCode("A".charCodeAt() + idx);
    match[char] = +val;
    return val;
  });
  expression.split("").map((item) => {
    if (item >= "A" && item <= "Z") {
      stack.push(match[item]);
    } else {
      let right = stack.pop();
      let left = stack.pop();
      if (item === "*") stack.push(left * right);
      else if (item === "/") stack.push(left / right);
      else if (item === "+") stack.push(left + right);
      else if (item === "-") stack.push(left - right);
    }
  });

  console.log(stack.pop().toFixed(2));
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  sol(input);
  process.exit();
});
