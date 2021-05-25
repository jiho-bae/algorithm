const sol = (input) => {
  const N = +input[0];
  const arr = input[1].split(" ");
  const check = new Array(10).fill(0);
  const temp = new Array(N + 1).fill(0);
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  function dfs(L, prev) {
    if (L === N) {
      const number = temp.join("");
      max = +max > +number ? max : number;
      min = +min < +number ? min : number;
      return;
    }

    if (arr[L] === ">") {
      for (let i = prev - 1; i >= 0; i--) {
        if (!check[i]) {
          check[i] = 1;
          temp[L + 1] = i;
          dfs(L + 1, i);
          check[i] = 0;
        }
      }
    } else {
      for (let i = prev + 1; i < 10; i++) {
        if (!check[i]) {
          check[i] = 1;
          temp[L + 1] = i;
          dfs(L + 1, i);
          check[i] = 0;
        }
      }
    }
    return;
  }

  for (let i = 0; i < 10; i++) {
    check[i] = 1;
    temp[0] = i;
    dfs(0, i);
    check[i] = 0;
  }

  let answer = `${max}\n${min}`;
  return answer;
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
