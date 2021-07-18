function sol(input) {
  const numbers = input.split("-").map((str) =>
    str
      .split("+")
      .map(Number)
      .reduce((s, v) => s + v, 0)
  );
  let answer = numbers[0] * 2 - numbers.reduce((s, v) => s + v, 0);
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
