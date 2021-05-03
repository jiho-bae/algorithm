const sol = (input) => {
  let arr = [0, 0, 0, 0];
  let answer = "";
  for (let str of input) {
    for (let x of str) {
      if (x >= "a" && x <= "z") arr[0]++;
      else if (x >= "A" && x <= "Z") arr[1]++;
      else if (x === " ") arr[3]++;
      else if (x >= 0 && x <= 9) arr[2]++;
    }
    answer += `${arr.join(" ")}\n`;
    arr = [0, 0, 0, 0];
  }
  return answer;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  console.log(sol(input));
  process.exit();
});
