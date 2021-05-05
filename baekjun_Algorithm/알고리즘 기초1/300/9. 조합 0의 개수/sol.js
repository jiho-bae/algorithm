// 다음과 같이 0<=m<=n<=2,000,000,000 일 때 절대 factorial함수로는
// 이 문제를 풀 수 없다.

const factorial = (n) => (n <= 1 ? 1n : BigInt(n) * factorial(n - 1));

const sol = (str) => {
  let [n, m] = str.split(" ");
  let cnt = 0;
  let num = String(factorial(n) / (factorial(m) * factorial(n - m))).split("");
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i]) break;
    cnt++;
  }
  console.log(cnt);
};

let input = "";
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = line;
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
