const sol = (input) => {
  const arr = input.slice(1);
  let result = "";
  let answer = 0;
  function recursive(n) {
    if (n === 0) {
      answer += 1;
      return;
    }
    if (n >= 1) recursive(n - 1);
    if (n >= 2) recursive(n - 2);
    if (n >= 3) recursive(n - 3);
    return answer;
  }

  for (let x of arr) {
    result += `${recursive(x)}\n`;
    answer = 0;
  }
  return result;
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(+line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
