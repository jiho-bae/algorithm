function sol(input) {
  const divisors = input[1].split(" ").sort((a, b) => a - b);
  return divisors[0] * divisors[divisors.length - 1];
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
