function sol(input) {
  const T = +input[0];
  let answer = "";
  for (let i = 1; i <= T; i++) {
    const [H, W, N] = input[i].split(" ").map(Number);
    const front = N % H === 0 ? H : N % H;
    const back = String(Math.ceil(N / H)).padStart(2, "0");
    answer += `${front}${back}\n`;
  }
  return answer;
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
