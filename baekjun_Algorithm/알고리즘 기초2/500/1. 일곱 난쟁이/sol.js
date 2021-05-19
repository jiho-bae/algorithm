const sol = (arr) => {
  arr.sort((a, b) => a - b);
  const sum = arr.reduce((s, v) => s + v, 0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        arr.map((v) => console.log(v));
        return;
      }
    }
  }
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(+line);
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
