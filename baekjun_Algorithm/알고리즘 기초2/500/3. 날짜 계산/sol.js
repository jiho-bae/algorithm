const sol = (str) => {
  str = str.split(" ").map((v) => +v);
  const E = str[0];
  const S = str[1];
  const M = str[2];

  let i = 1;
  while (true) {
    if ((i - E) % 15 === 0 && (i - S) % 28 === 0 && (i - M) % 19 === 0) {
      break;
    }
    i++;
  }
  console.log(i);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(line);
  })
  .on("close", () => {
    process.exit();
  });
