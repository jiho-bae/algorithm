const sol = (input) => {
  [L, C] = input[0].split(" ").map((v) => +v);
  const arr = input[1].split(" ").sort();
  const vowelArr = ["a", "e", "i", "o", "u"];
  const temp = new Array(L).fill(0);

  let result = "";

  function check() {
    let consonant = 0;
    let vowel = 0;
    for (let x of temp) {
      if (vowelArr.includes(x)) vowel++;
      else consonant++;
    }
    if (vowel >= 1 && consonant >= 2) return true;
    return false;
  }

  function dfs(D, pick) {
    if (D === L) {
      if (check()) result += `${temp.join("")}\n`;
      return;
    }

    for (let i = pick; i < C; i++) {
      temp[D] = arr[i];
      dfs(D + 1, i + 1);
    }
  }
  dfs(0, 0);
  return result;
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
