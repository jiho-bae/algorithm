function sol(input) {
  let answer = "";
  input
    .slice(1)
    .sort((a, b) => a - b)
    .map((v) => (answer += `${v}\n`));
  return answer;
}

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
  });
