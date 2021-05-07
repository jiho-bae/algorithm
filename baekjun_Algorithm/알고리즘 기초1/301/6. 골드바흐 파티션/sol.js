const findPrime = (x) => {
  let prime = new Array(x + 1).fill(1);
  prime[0] = prime[1] = 0;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (prime[i] === 0) continue;
    for (let j = 2 * i; j <= x; j += i) {
      prime[j] = 0;
    }
  }
  return prime;
};

const sol = ([n, ...input]) => {
  let answer = "";
  input.map((value) => {
    value = +value;
    let cnt = 0;
    let prime = findPrime(value);
    for (let i = 2; i < prime.length; i++) {
      if (i > value / 2) break;
      if (prime[i] && prime[value - i]) cnt++;
    }
    answer += `${cnt}\n`;
  });
  return answer;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(sol(input));
  process.exit();
});
