const sol = (input) => {
  let [A, B] = input[0].split(" ").map((v) => +v);
  let m = +input[1];
  let numbers = input[2].split(" ").map((v) => +v);
  let decimal = 0;
  let mul = 1;
  for (let i = m - 1; i >= 0; i--) {
    decimal += numbers[i] * mul;
    mul *= A;
  }
  let answer = "";
  while (decimal) {
    answer = `${decimal % B} ` + answer;
    decimal = parseInt(decimal / B);
  }
  console.log(answer);
};

let input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
