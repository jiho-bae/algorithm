function sol(input) {
  let answer = 0;

  const len = input.length;
  const N = +input;
  const min = input - len * 9;
  for (let i = min; i <= N; i++) {
    const str = String(i);
    const num =
      +str +
      str
        .split("")
        .map(Number)
        .reduce((s, v) => s + v, 0);
    if (num === N) {
      answer = +str;
      break;
    }
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
