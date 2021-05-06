const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const sol = (input) => {
  let [n, s] = input[0].split(" ");
  let position = input[1].split(" ").map((v) => +v);
  let distance = [];
  for (let p of position) {
    distance.push(Math.abs(s - p));
  }

  let i = 1;
  let GCD = distance[0];
  while (i < distance.length) {
    GCD = gcd(GCD, distance[i++]);
  }
  console.log(GCD);
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
