function sol(input) {
  let answer = 0;
  const n = +input[0];
  for (let i = 1; i <= n; i++) {
    const word = input[i];
    let prevWord = word[0];
    let flag = 1;
    for (let j = 1; j < word.length; j++) {
      if (prevWord === word[j]) continue;
      if (word.slice(j).includes(prevWord)) {
        flag = 0;
        break;
      } else prevWord = word[j];
    }
    if (flag) answer++;
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
