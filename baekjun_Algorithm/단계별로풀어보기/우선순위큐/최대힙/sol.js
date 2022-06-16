function sol(input) {
  const N = +input[0];
  const queue = [];
  let answer = "";
  for (let i = 1; i <= N; i++) {
    const x = +input[i];
    if (x === 0) {
      if (!queue.length) {
        answer += `0\n`;
        continue;
      }
      const max = Math.max(...queue);
      answer += `${queue.splice(queue.indexOf(max), 1)[0]}\n`;
      continue;
    }
    queue.push(x);
  }
  return answer;
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
