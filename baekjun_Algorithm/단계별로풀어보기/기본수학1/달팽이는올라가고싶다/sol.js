function sol(input) {
  const [A, B, V] = input.split(" ").map(Number);
  let cnt = Math.ceil((V - A) / (A - B));
  return cnt + 1;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
