function sol(input) {
  const N = +input[0];
  const arr = Array.from({ length: 51 }, () => new Array());
  let answer = "";

  for (let i = 1; i <= N; i++) {
    const len = input[i].length;
    if (!arr[len].includes(input[i])) arr[len].push(input[i]);
  }

  arr.map((v) => v.sort());
  arr.forEach((v) => {
    if (v.length) answer += `${v.join("\n")}\n`;
  });
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
