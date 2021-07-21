function sol(input) {
  const n = input[0];
  const arr = input[1].split(" ").map(Number);
  let answer = "";

  const first = arr[0];
  for (let i = 1; i < n; i++) {
    let a = first;
    let b = arr[i];
    let num = 2;
    while (a !== 1 || b !== 1) {
      if (num > a && num > b) break;
      if (!(a % num) && !(b % num)) {
        a /= num;
        b /= num;
        continue;
      }
      num++;
    }
    answer += `${a}/${b}\n`;
  }
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
