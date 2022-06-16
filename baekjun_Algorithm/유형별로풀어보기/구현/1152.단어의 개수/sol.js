function sol(input) {
  input = input.trim();
  if (input === "") return 0;
  return input.split(" ").length;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
