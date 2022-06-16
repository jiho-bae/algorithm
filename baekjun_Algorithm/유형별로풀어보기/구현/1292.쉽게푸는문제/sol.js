function sol(input) {
  const [A, B] = input.split(" ").map(Number);
  let str = "";
  let number = 1;
  while (str.length <= B) {
    str += String(number).repeat(number);
    number++;
  }
  let answer = str
    .slice(A - 1, B)
    .split("")
    .map(Number)
    .reduce((s, v) => s + v, 0);
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
