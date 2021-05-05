const sol = (n) => {
  if (n <= 1) return 1;
  else return n * sol(n - 1);
};
const sol2 = (n) => (n <= 1 ? 1 : n * sol2(n - 1));

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(+line);
  })
  .on("close", () => {
    console.log(sol2(input[0]));
    process.exit();
  });
