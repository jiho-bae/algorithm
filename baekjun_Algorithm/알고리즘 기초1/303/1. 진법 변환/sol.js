const sol = (input) => {
  let [N, B] = input.split(" ");
  console.log(parseInt(N, B));
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(line);
  })
  .on("close", () => {
    process.exit();
  });
