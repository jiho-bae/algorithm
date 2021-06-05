const sol = (input) => {
  let idx = 0;
  let answer = "";

  while (input[idx].length !== 1) {
    const [N, ...S] = input[idx++].split(" ").map(Number);

    function dfs(V, pick) {
      if (pick.length === 6) {
        answer += `${pick.join(" ")}\n`;
        return;
      }
      for (let i = V; i < N; i++) {
        dfs(i + 1, [...pick, S[i]]);
      }
    }
    dfs(0, []);
    answer += "\n";
  }
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
