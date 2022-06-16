function sol(input) {
  let answer = "";
  for (let x of input) {
    if (x <= "C") answer += `${String.fromCharCode(x.charCodeAt() + 23)}`;
    else answer += `${String.fromCharCode(x.charCodeAt() - 3)}`;
  }
  return answer;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
