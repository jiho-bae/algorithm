function sol(input) {
  let answer = "";
  const tCase = input.slice(1).map((str) => str.split(" ").map(Number));
  for (let i = 0; i < tCase.length; i += 2) {
    let cnt = 0;
    let [N, M] = tCase[i];
    const queue = tCase[i + 1];
    while (true) {
      const q = queue.shift();
      if (q < Math.max(...queue)) queue.push(q);
      else {
        cnt++;
        if (M === 0) break;
      }

      if (M === 0) M = queue.length - 1;
      else M--;
    }
    answer += `${cnt}\n`;
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
