const sol = (str) => {
  let answer = "";
  for (let x of str) {
    let ascii = x.charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      ascii += 13;
      answer +=
        ascii > 90
          ? String.fromCharCode(ascii - 26)
          : String.fromCharCode(ascii);
    } else if (ascii >= 97 && ascii <= 122) {
      ascii += 13;
      answer +=
        ascii > 122
          ? String.fromCharCode(ascii - 26)
          : String.fromCharCode(ascii);
    } else answer += x;
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
  console.log(sol(input[0]));
  process.exit();
});
