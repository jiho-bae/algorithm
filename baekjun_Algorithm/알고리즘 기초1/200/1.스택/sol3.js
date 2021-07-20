function solution(input) {
  const stack = [];
  let top = 0;
  let answer = "";
  const cmdObj = {
    push: (x) => (stack[top++] = x),
    pop: () => {
      if (top) {
        top--;
        return stack.splice(-1);
      }
      return -1;
    },
    size: () => top,
    empty: () => (!top ? 1 : 0),
    top: () => (top ? stack[top - 1] : -1),
  };

  input.slice(1).map((str) => {
    const [cmd, num] = str.split(" ");
    if (cmd === "push") cmdObj[cmd](+num);
    else answer += `${cmdObj[cmd]()}\n`;
  });
  return answer;
}

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(solution(input));
    process.exit();
  });
