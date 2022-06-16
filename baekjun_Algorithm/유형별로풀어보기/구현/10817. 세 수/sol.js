function sol(input) {
  return input.split(" ").sort((a, b) => b - a)[1];
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
