function sol(input) {
  const N = +input[0];
  const numbers = input[1].split(" ").map(Number);
  const max = Math.max(...numbers);
  return (numbers.reduce((s, v) => s + v, 0) / N / max) * 100;
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
