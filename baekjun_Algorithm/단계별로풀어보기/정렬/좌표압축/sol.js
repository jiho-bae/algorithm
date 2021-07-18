function sol(input) {
  const N = +input[0];
  const arr = input[1].split(" ").map(Number);
  let set = new Set(arr);
  set = Array.from(set).sort((a, b) => a - b);
  const answer = [];

  arr.forEach((ele) => {
    answer.push(set.indexOf(ele));
  });

  return answer.join(" ");
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
