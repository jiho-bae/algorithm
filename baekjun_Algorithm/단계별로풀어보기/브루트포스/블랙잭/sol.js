function sol(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const numArr = input[1].split(" ").map(Number);
  let max = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const num = numArr[i] + numArr[j] + numArr[k];
        if (num <= M) max = Math.max(max, num);
      }
    }
  }
  return max;
}

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
