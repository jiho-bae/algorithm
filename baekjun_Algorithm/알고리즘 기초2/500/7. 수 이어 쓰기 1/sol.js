const sol = (N) => {
  const len = N.length;
  N = +N;
  if (len === 1) return N;

  let cnt = 0;
  for (let i = 1; i < len; i++) {
    cnt += i * (9 * 10 ** (i - 1));
  }
  cnt += len * (N - 10 ** (len - 1) + 1);
  return cnt;
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
