const sol = (input) => {
  const [N, K] = input[0].split(" ").map(Number);
  const coins = [];
  for (let i = 1; i <= N; i++) coins.push(+input[i]);
  let cnt = (idx = num = 0);
  for (let i = coins.length - 1; i >= 0; i--) {
    if (coins[i] < K) {
      idx = i;
      break;
    }
  }

  while (num !== K) {
    if (num + coins[idx] <= K) {
      num += coins[idx];
      cnt++;
    } else {
      idx--;
    }
  }
  return cnt;
};

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
