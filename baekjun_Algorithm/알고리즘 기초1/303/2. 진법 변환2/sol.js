const sol = (input) => {
  let [N, B] = input.split(" ");
  console.log(Number(N).toString(B).toUpperCase());
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(line);
  })
  .on("close", () => {
    process.exit();
  });
