function sol(input) {
  let [a, b] = input.split(" ");
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  if (a > b) return a;
  return b;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
