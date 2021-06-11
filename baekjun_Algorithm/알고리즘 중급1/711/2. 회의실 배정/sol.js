const sol = (input) => {
  const N = +input[0];
  const time = input
    .slice(1)
    .map((str) => str.split(" ").map(Number))
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let idx = (cnt = 1);
  let et = time[0][1];
  while (true) {
    if (idx === time.length) break;
    if (time[idx][0] >= et) {
      et = time[idx][1];
      cnt++;
    }
    idx++;
  }
  return cnt;
};

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

sol([
  "11",
  "1 4",
  "3 5",
  "6 6",
  "5 6",
  "3 8",
  "5 9",
  "6 10",
  "8 11",
  "8 12",
  "2 13",
  "12 14",
]);
