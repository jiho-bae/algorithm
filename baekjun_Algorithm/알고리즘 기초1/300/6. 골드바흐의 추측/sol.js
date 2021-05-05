const sol = (input) => {
  let answer = "";
  let max = Math.max(...input);
  let arr = Array(max + 1).fill(1);
  arr[1] = 0;
  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (arr[i]) {
      let j = 2;
      while (i * j <= max) {
        arr[i * j] = 0;
        j++;
      }
    }
  }
  const results = [];
  for (let i = 3; i <= max; i++) {
    if (arr[i]) {
      results.push(i);
    }
  }
  for (let x of input) {
    if (x < 6) continue;
    let flag = 1;
    for (let i = 0; i < results.length; i++) {
      if (results[i] > parseInt(x / 2)) break;
      if (results.includes(x - results[i])) {
        flag = 0;
        answer += `${x} = ${results[i]} + ${x - results[i]}\n`;
        break;
      }
    }
    if (flag) answer += `"Goldbach's conjecture is wrong."\n`;
  }
  return answer;
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(+line);
  })
  .on("close", function () {
    console.log(sol(input));
    process.exit();
  });
