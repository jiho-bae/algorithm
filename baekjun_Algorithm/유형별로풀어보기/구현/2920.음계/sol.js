function sol(input) {
  const ascending = "1 2 3 4 5 6 7 8";
  const descending = "8 7 6 5 4 3 2 1";
  if (input === ascending) return "ascending";
  if (input === descending) return "descending";
  return "mixed";
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
