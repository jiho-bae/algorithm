function sol(input) {
  const T = +input[0];
  let answer = "";
  for (let i = 1; i <= T; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    let diff = y - x;
    let a = Math.floor(Math.sqrt(diff));
    if (diff === a ** 2) answer += `${2 * a - 1}\n`;
    else if (diff > a ** 2 && diff <= a ** 2 + a) answer += `${2 * a}\n`;
    else if (diff > a ** 2 + a && diff < (a + 1) ** 2) answer += `${2 * a + 1}\n`;
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
