function sol(input) {
  let N = Number(input);
  let answer = "";
  while (N > 0) {
    answer += `${"*".repeat(N--)}\n`;
  }
  return answer;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {});
