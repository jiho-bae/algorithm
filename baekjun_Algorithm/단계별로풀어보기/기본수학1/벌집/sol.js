function sol(input) {
  const N = +input;
  let cnt = 1;
  let range = 1,
    tmp = 1;

  while (range < N) {
    tmp = 6 * cnt++;
    range += tmp;
  }
  return cnt;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
