const sol = (n) => {
  if (n === 0) return 0;
  let answer = "";
  while (n !== 1) {
    let r = Math.abs(n % 2);
    n = Math.ceil(n / -2);
    answer = r + answer;
  }
  answer = n + answer;
  return answer;
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(+line));
  })
  .on("close", () => {
    process.exit();
  });
