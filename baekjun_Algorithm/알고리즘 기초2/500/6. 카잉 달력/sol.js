const gcd = (a, b) => {
  let c = 0;
  while (b !== 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
};

const sol = ([n, ...input]) => {
  n = +n;
  input = input.map((str) => str.split(" ").map((val) => +val));
  let answer = "";

  for (let i = 0; i < n; i++) {
    const [M, N, x, y] = input[i];
    const lcm = (M * N) / gcd(M, N);
    let flag = 1;
    let num = x;
    while (num < lcm) {
      if ((num - y) % N === 0) {
        answer += `${num}\n`;
        flag = 0;
        break;
      }
      num += M;
    }
    if (flag) answer += `-1\n`;
  }
  console.log(answer);
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
