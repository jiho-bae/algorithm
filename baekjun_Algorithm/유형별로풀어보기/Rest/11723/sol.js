const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    let result = "";
    let S = new Array(21).fill(0);
    input.slice(1).map((str) => {
      const [oper, num] = str.split(" ");
      if (oper === "add") {
        S[+num] = 1;
        return;
      }
      if (oper === "check") {
        result += `${+S[+num]}\n`;
        return;
      }
      if (oper === "remove") {
        S[+num] = 0;
        return;
      }
      if (oper === "toggle") {
        S[+num] = !S[+num];
        return;
      }
      if (oper === "all") {
        for (let i = 0; i < S.length; i++) S[i] = 1;
        return;
      }
      if (oper === "empty") {
        for (let i = 0; i < S.length; i++) S[i] = 0;
        return;
      }
    });
    console.log(result);
    process.exit();
  });
