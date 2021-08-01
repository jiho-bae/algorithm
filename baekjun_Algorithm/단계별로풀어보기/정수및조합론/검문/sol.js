function sol(input) {
  const N = +input[0];
  const numbers = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);
  const answer = new Set();

  const GCD = (a, b) => (!(a % b) ? b : GCD(b, a % b)); // a,b의 최대공약수

  let gcd = numbers[1] - numbers[0]; // num[i]-num[i-1]의 최대공약수 구하기.
  for (let i = 2; i < N; i++) gcd = GCD(gcd, numbers[i] - numbers[i - 1]);

  for (let i = 2; i ** 2 <= gcd; i++)
    if (!(gcd % i)) {
      answer.add(i);
      answer.add(gcd / i);
    } // gcd의 1을 제외한 모든 약수 구하기 (20일 경우 2,10 , 4,5 순으로 들어감.)

  answer.add(gcd); // 1을 제외했으므로, 20이 들어가지 않아서 넣어줘야 함.
  return Array.from(answer)
    .sort((a, b) => a - b)
    .join(" ");
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
