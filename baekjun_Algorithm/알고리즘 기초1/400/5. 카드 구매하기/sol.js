const sol = ([n, cards]) => {
  n = +n;
  cards = cards.split(" ").map((v) => +v);
  let d = Array.from({ length: n + 1 }, () => 0);
  for (let i = 1; i <= n; i++) d[i] = cards[i - 1];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      d[i] = Math.max(d[i], d[i - j] + cards[j - 1]);
    }
  }
  console.log(d[n]);
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
