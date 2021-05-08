const sol = (input) => {
  let answer = "";
  let numArr = [];
  while (input.length > 3) {
    numArr.push(input.substring(input.length - 3, input.length));
    input = input.substring(0, input.length - 3);
  }
  numArr.push(input);
  for (let i = numArr.length - 1; i >= 0; i--) {
    let decimal = parseInt(numArr[i], 2);
    let octal = decimal.toString(8);
    answer += octal;
  }
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
