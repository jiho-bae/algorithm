function sol(input) {
  const [a, b] = input.split(" ");
  const A = BigInt(a);
  const B = BigInt(b);
  return String(A + B);
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
