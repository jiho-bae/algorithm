const sol = (input) => {
  const line = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let time = 0;
  for (let i = 0; i < line.length; i++) {
    for (let j = 0; j <= i; j++) {
      time += line[j];
    }
  }
  return time;
};

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
