function sol(input) {
  let answer = "";
  const N = +input[0];
  const numbers = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  answer += `${Math.round(numbers.reduce((s, v) => s + v, 0) / N)}\n`;
  answer += `${numbers[Math.floor(N / 2)]}\n`;

  const map = new Map();
  let max = 1;
  for (let number of numbers) {
    if (map.has(number)) {
      max = Math.max(max, map.get(number) + 1);
      map.set(number, map.get(number) + 1);
    } else map.set(number, 1);
  }
  let maxArr = [];
  for (let [key, val] of map) {
    if (val === max) maxArr.push(key);
  }

  answer += maxArr.length === 1 ? `${maxArr[0]}\n` : `${maxArr[1]}\n`;
  answer += `${numbers[N - 1] - numbers[0]}\n`;
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
