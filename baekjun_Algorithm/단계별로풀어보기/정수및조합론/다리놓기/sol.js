function sol(input) {
  const T = +input[0];
  let answer = "";

  const dp = Array.from({ length: 31 }, () => new Array(31).fill(0));

  for (let i = 1; i <= 30; i++) dp[1][i] = i;
  for (let i = 2; i <= 30; i++) {
    for (let j = i; j <= 30; j++) {
      for (let k = j - 1; k >= 1; k--) dp[i][j] += dp[i - 1][k];
    }
  }
  for (let i = 1; i <= T; i++) {
    const [N, M] = input[i].split(" ").map(Number);
    answer += `${dp[N][M]}\n`;
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
