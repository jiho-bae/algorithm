function sol(input) {
  const N = input;
  const cntArr = Array(10).fill(0);
  for (let i = 0; i < N.length; i++) {
    const n = Number(N[i]);
    if ([6, 9].includes(n)) {
      cntArr[6] += 0.5;
      cntArr[9] += 0.5;
    } else cntArr[n] += 1;
  }
  return Math.ceil(Math.max(...cntArr));
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
