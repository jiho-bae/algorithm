const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const sol = (n) => {
  let num = factorial(n);
  let cnt = 0;
  while (num % 10 === 0) {
    cnt++;
    num /= 10;
  }
  console.log(cnt);
};
let input = 0;
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = +line;
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
