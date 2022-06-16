// 역시 단순무식한 방법은 안통함.

function sol(input) {
  const N = +input[0];
  const numbers = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);
  const answer = [];
  const end = numbers[N - 1];

  for (let i = 2; i <= end; i++) {
    let tmp = numbers[0] % i;
    let flag = 1;
    for (let number of numbers) {
      if (number % i === tmp) continue;
      flag = 0;
      break;
    }
    if (flag) answer.push(i);
  }
  return answer.join(" ");
}

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
