const sol = (input) => {
  const [R, C] = input[0].split(" ").map(Number);
  const adjM = input.slice(1).map((row) => row.split(""));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let max = Number.MIN_SAFE_INTEGER;
  const check = Array.from({ length: 26 }, () => 0);
  function dfs(x, y, cnt) {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
      const idx = adjM[nx][ny].charCodeAt() - 65;
      if (check[idx]) continue;
      check[idx] = 1;
      dfs(nx, ny, cnt + 1);
      check[idx] = 0;
    }
    if (cnt > max) max = cnt;
    return;
  }

  const idx = adjM[0][0].charCodeAt() - 65;
  check[idx] = 1;
  dfs(0, 0, 1);
  return max;
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
