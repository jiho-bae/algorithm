function sol(input) {
  return input
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
