let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let n = parseInt(input[0]);
let k = parseInt(input[1]);

let answer = "<";
let queue = Array.from({ length: n }, (v, index) => index + 1);
let cnt = 0;
while (queue.length !== 1) {
  if (++cnt === k) {
    answer += `${queue.shift()}, `;
    cnt = 0;
  } else {
    queue.push(queue.shift());
  }
}
answer += `${queue.shift()}>`;
console.log(answer);
