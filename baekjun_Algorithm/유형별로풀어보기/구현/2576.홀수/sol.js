function sol(input) {
  const filtered = input.map(Number).filter((v) => v % 2 === 1);
  if (!filtered.length) return -1;
  const sum = filtered.reduce((s, v) => s + v, 0);
  const min = Math.min(...filtered);
  return `${sum}\n${min}\n`;
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
