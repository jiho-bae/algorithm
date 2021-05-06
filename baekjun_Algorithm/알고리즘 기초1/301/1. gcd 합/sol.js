const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const sol = ([t, ...input]) => {
  for (let str of input) {
    let answer = 0;
    let [n, ...strArr] = str.split(" ").map((v) => +v);
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        if (strArr[i] > strArr[j]) answer += gcd(strArr[i], strArr[j]);
        else answer += gcd(strArr[j], strArr[i]);
      }
    }
    console.log(answer);
  }
};

let input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
