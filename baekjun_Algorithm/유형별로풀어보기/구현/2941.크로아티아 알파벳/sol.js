function sol(input) {
  const exp = /(c=|c-|dz=|d-|lj|nj|s=|z=)/;
  return input.replace(exp, "1").length;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
