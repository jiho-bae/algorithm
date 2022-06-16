function sol(input) {
  let answer = "";
  let idx = 0;
  while (input.length >= idx) {
    answer += `${input.slice(idx, idx + 10)}\n`;
    idx += 10;
  }
  return answer;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
