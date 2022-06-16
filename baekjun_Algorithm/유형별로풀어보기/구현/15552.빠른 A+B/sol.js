function sol(input) {
  let answer = "";
  input.slice(1).forEach((str) => {
    const [a, b] = str.split(" ").map(Number);
    answer += `${a + b}\n`;
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
    console.log(sol(input));
    process.exit();
  });
