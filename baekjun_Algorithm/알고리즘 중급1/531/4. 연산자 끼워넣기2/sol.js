const sol = (input) => {
  const N = +input[0];
  const numbers = input[1].split(" ").map(Number);
  const operator = input[2].split(" ").map(Number);
  const operObj = {
    0: (oper1, oper2) => oper1 + oper2,
    1: (oper1, oper2) => oper1 - oper2,
    2: (oper1, oper2) => oper1 * oper2,
    3: (oper1, oper2) => {
      if (oper1 < 0) {
        return -Math.floor(-oper1 / oper2);
      }
      return Math.floor(oper1 / oper2);
    },
  };

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  function dfs(L, temp) {
    if (L === N - 1) {
      min = Math.min(min, temp);
      max = Math.max(max, temp);
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (!operator[i]) continue;
      operator[i] -= 1;
      const nextTemp = operObj[i](temp, numbers[L + 1]);
      dfs(L + 1, nextTemp);
      operator[i] += 1;
    }
  }
  dfs(0, numbers[0]);

  return `${max}\n${min}`;
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
