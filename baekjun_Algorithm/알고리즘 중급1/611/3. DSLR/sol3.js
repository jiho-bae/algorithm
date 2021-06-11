const sol = (input) => {
  let answer = "";

  function dfs(A, B) {
    const queue = [];
    queue.push([A, ""]);
    const check = new Array(10001).fill(0);
    check[A] = 1;
    const operObj = {
      D: (n) => (2 * n) % 10000,
      S: (n) => (n === 0 ? 9999 : n - 1),
      L: (n) => (n % 1000) * 10 + Math.floor(n / 1000),
      R: (n) => Math.floor(n / 10) + (n % 10) * 1000,
    };
    while (queue.length) {
      const [register, cmd] = queue.shift();
      if (register === B) {
        answer += `${cmd}\n`;
        return;
      }
      for (let oper of ["D", "S", "L", "R"]) {
        const newRegister = operObj[oper](register);
        if (check[newRegister]) continue;
        check[newRegister] = 1;
        queue.push([newRegister, cmd + oper]);
      }
    }
  }

  input.slice(1).map((row) => {
    const [A, B] = row.split(" ").map(Number);
    dfs(A, B);
  });
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
