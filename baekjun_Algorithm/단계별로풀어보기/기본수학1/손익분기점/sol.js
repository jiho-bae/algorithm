function sol(input) {
  const [A, B, C] = input.split(" ").map(Number);
  if (B >= C) return -1;
  let answer = Math.floor(A / (C - B));
  return answer + 1;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
