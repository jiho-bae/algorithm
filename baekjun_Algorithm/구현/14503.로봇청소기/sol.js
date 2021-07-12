function sol(input) {
  const [N, M] = input[0].split(" ").map(Number);
  let [r, c, d] = input[1].split(" ").map(Number);
  const map = input.slice(2).map((str) => str.split(" ").map(Number));
  let cnt = 0;
  const direction = {
    0: [-1, 0],
    1: [0, 1],
    2: [1, 0],
    3: [0, -1],
  };
  const check = Array.from({ length: N }, () => new Array(M).fill(0));
  let rotate = 0;
  while (true) {
    if (map[r][c] === 0 && rotate === 0) cnt++;
    check[r][c] = 1;
    if (rotate === 4) {
      const backD = d > 1 ? d - 2 : d + 2;
      const [backR, backC] = direction[backD];
      if (map[r + backR][c + backC] === 1) break;
      else {
        r += backR;
        c += backC;
        rotate = 0;
      }
    }

    const nextD = d > 0 ? d - 1 : 3;
    const [nextR, nextC] = direction[nextD];
    if (map[r + nextR][c + nextC] === 1 || check[r + nextR][c + nextC] === 1) {
      d = nextD;
      rotate++;
    } else {
      d = nextD;
      r += nextR;
      c += nextC;
      rotate = 0;
    }
  }
  return cnt;
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
