function sol(input) {
  let answer = "";
  const T = +input[0];
  for (let i = 1; i <= T; i++) {
    const n = +input[i];
    const temp = [];
    n.toString(2)
      .split("")
      .reverse()
      .forEach((v, i) => {
        if (v === "1") temp.push(i);
      });
    answer += `${temp.join(" ")}\n`;
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
