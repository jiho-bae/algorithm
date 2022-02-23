const sol = (input) => {
  const N = +input[0];
  const now = input[1].split("").map(Number);
  const target = input[2].split("").map(Number);

  function onOff(idx) {
    for (let i = idx - 1; i <= idx + 1; i++) {
      if (i < 0 || i >= N) continue;
      now[i] = +!now[i];
    }
  }

  
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
