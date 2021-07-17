function sol(input) {
  const N = +input[0];
  let answer = [];
  for (let i = 1; i <= N; i++) {
    answer.push(+input[i]);
  }
  answer.sort((a, b) => a - b);
  return answer.join("\n");
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
