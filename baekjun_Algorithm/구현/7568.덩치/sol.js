function sol(input) {
  let answer = [];
  const n = +input[0];
  const dungchi = input.slice(1).map((str) => str.split(" ").map(Number));

  for (let i = 0; i < n; i++) {
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (dungchi[i][0] < dungchi[j][0] && dungchi[i][1] < dungchi[j][1]) cnt++;
    }
    answer.push(cnt);
  }
  return answer.join(" ");
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
