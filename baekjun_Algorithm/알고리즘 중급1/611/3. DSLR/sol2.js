const sol = (input) => {
  let answer = "";

  function dfs(A, B) {
    const queue = [];
    queue.push([A, ""]);
    const check = new Array(10001).fill(0);
    check[A] = 1;
    let prevIdx = 0;

    while (queue.length) {
      const curIdx = queue.length;
      for (let i = prevIdx; i < prevIdx + curIdx; i++) {
        const [reg, cmd] = queue[i];
        if (reg === B) {
          answer += `${cmd}\n`;
          return;
        }
        for (let oper of ["D", "S", "L", "R"]) {
          let newReg;
          if (oper === "D") {
            newReg = (reg * 2) % 10000;
          } else if (oper === "S") {
            newReg = reg === 0 ? 9999 : reg - 1;
          } else if (oper === "L") {
            const rArr = reg.toString().split("");
            newReg = Number([...rArr.slice(1), rArr[0]].join(""));
          } else if (oper === "R") {
            const rArr = reg.toString().split("");
            const len = rArr.length - 1;
            newReg = Number([rArr[len], ...rArr.slice(0, len)].join(""));
          }
          if (check[newReg]) continue;
          check[newReg] = 1;
          queue.push([newReg, cmd + oper]);
        }
      }
      prevIdx += curIdx;
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
