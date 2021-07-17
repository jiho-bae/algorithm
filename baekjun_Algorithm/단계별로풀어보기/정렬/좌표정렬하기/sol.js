function sol(input) {
  const N = +input[0];
  const arr = [];
  let answer = "";

  for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    arr.push([x, y]);
  }
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  arr.forEach(([x, y]) => {
    answer += `${x} ${y}\n`;
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
