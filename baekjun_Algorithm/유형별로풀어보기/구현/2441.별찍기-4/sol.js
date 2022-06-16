function sol(input) {
  let N = Number(input);
  const size = N;
  let answer = "";
  while (N > 0) {
    answer += `${" ".repeat(size - N)}${"*".repeat(N--)}\n`;
  }
  return answer;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {});
