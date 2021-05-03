let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let series = input[1].split(" ").map((v) => Number(v));
let answer = [];

for (let i = 0; i < n; i++) {
  let floor = -1;
  for (let j = i + 1; j < n; j++) {
    if (series[i] < series[j]) {
      floor = series[j];
      break;
    }
  }
  answer.push(floor);
}

console.log(answer.join(" "));

// 시간초과
// 2중 for문으로 인해 최대 100만 * 100만 = O(N^2) = 2조..
