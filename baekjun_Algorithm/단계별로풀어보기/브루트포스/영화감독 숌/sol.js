function sol(input) {
  const N = +input;
  let num = 666;
  let cnt = 0;

  while (cnt !== N) {
    if (String(num).includes("666")) cnt++;
    num++;
  }
  return num - 1;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
