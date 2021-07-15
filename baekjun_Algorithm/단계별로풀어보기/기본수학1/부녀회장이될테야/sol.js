function sol(input) {
  const T = +input[0];
  let answer = "";
  for (let i = 1; i <= 2 * T; i += 2) {
    const k = +input[i];
    const n = +input[i + 1];
    const arr = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));
    let num = 0;
    for (let i = 1; i <= n; i++) arr[0][i] = i;

    for (let i = 1; i < k; i++) {
      for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= j; k++) {
          arr[i][j] += arr[i - 1][k];
        }
      }
    }

    for (let i = 1; i <= n; i++) num += arr[k - 1][i];
    answer += `${num}\n`;
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
