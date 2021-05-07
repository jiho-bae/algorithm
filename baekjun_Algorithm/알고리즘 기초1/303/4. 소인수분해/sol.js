const sol = (num) => {
  if (num === 1) return 1;
  let i = 2;
  let answer = "";
  while (num !== 1) {
    if (num % i === 0) {
      answer += `${i}\n`;
      num = num / i;
    } else i++;
  }
  console.log(answer);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(+line);
  })
  .on("close", () => {
    process.exit();
  });
