function sol(input) {
  let answer = "";
  input = input.slice(1);
  for (let str of input) {
    let sum = 0;
    let cnt = 0;
    for (let s of str) {
      if (s === "X") {
        cnt = 0;
        continue;
      }
      sum += ++cnt;
    }
    answer += `${sum}\n`;
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
  });
