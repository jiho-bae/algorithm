function sol(input) {
  const N = +input[0];
  const dist = input[1].split(" ").map(Number);
  const prices = input[2].split(" ").map(Number);

  let minPrice = Number.MAX_SAFE_INTEGER;
  let answer = 0;
  for (let i = 0; i < N - 1; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    answer += minPrice * dist[i];
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
