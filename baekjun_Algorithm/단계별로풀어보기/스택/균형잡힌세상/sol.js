const sol = (input) => {
  const answer = [];
  const len = input.length;
  for (let i = 0; i < len - 1; i++) {
    const stack = [];
    const bracket = input[i]
      .split("")
      .filter((el) => ["[", "(", "]", ")"].includes(el));

    if (bracket.length % 2 !== 0) {
      answer.push("no");
      continue;
    }

    for (let br of bracket) {
      if (["[", "("].includes(br)) stack.push(br);
      if (br === "]") {
        if (stack[stack.length - 1] === "[") stack.pop();
        else stack.push(br);
      }
      if (br === ")") {
        if (stack[stack.length - 1] === "(") stack.pop();
        else stack.push(br);
      }
    }
    if (stack.length) answer.push("no");
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
