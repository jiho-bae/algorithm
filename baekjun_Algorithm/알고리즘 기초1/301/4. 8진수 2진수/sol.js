const sol = (input) => {
  let answer = "";
  let numArr = input.split("").map((v) => +v);
  for (let i = numArr.length - 1; i > 0; i--) {
    let binary = numArr[i].toString(2);
    let n = 3 - binary.length;
    answer = `${"0".repeat(n)}${binary}` + answer;
  }
  answer = numArr[0].toString(2) + answer;
  console.log(answer);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(line);
  })
  .on("close", () => {
    process.exit();
  });
