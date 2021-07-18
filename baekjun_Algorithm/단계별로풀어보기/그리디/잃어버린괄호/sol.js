function sol(input) {
  const numbers = input.match(/[0-9]+/g).map(Number);
  const operators = input.match(/[\-\+]/g);
  for (let i = len - 1; i >= 0; i--) {
    if (operators[i] === "+") {
      const [operA, operB] = numbers.splice(i, 2);
      numbers.splice(i, 0, operA + operB);
    }
  }
  let answer = 2 * numbers[0] - numbers.reduce((s, v) => s + v, 0);
  return answer;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
