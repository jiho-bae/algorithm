function sol(input) {
  let answer = [];
  input.slice(1).forEach((n) => {
    n = Number(n);
    if (n === 0) answer.pop();
    else answer.push(n);
  });
  return answer.reduce((s, v) => s + v, 0);
}

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
