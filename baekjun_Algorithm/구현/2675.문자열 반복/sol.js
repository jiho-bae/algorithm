function sol(input) {
  let answer = "";
  input.slice(1).forEach((str) => {
    const [R, S] = str.split(" ");
    for (let char of S) {
      answer += char.repeat(R);
    }
    answer += "\n";
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
  });
