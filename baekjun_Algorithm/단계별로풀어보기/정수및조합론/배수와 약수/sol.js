function sol(input) {
  let answer = "";
  let i = 0;
  while (true) {
    const [a, b] = input[i++].split(" ").map(Number);
    if (a === 0 && b === 0) break;
    if (!(b % a)) answer += "factor\n";
    else if (!(a % b)) answer += "multiple\n";
    else answer += "neither\n";
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
