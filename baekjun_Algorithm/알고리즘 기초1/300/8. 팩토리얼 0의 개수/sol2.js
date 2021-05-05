// input = 500의 경우 infinity가 발생하는 문제

const factorial = (n) => (n <= 1 ? 1n : BigInt(n) * factorial(n - 1));

const sol = (n) => {
  let cnt = 0;
  let num = String(factorial(n)).split("");
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i]) break;
    cnt++;
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
