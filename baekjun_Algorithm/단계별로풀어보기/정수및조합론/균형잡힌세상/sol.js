const sol = (input) => {
  const answer = [];
  const len = input.length;
  for (let i = 0; i < len - 1; i++) {
    const stack = [];
    const str = input[i];
    const strLen = str.length;
    let flag = 0;

    for (let j = 0; j < strLen; j++) {
      if (["(", "["].includes(str[j])) stack.push(str[j]);
      else if (str[j] === ")") {
        if (stack[stack.length - 1] === "(" && stack.length) stack.pop();
        else {
          flag = 1;
          break;
        }
      } else if (str[j] === "]") {
        if (stack[stack.length - 1] === "[" && stack.length) stack.pop();
        else {
          flag = 1;
          break;
        }
      }
    }
    if (flag) answer.push("no");
    else answer.push("yes");
  }
  return answer.join("\n");
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
