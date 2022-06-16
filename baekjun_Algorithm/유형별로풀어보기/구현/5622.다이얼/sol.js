function sol(input) {
  let answer = 0;
  for (let s of input) {
    if (s <= "C") answer += 3;
    else if (s <= "F") answer += 4;
    else if (s <= "I") answer += 5;
    else if (s <= "L") answer += 6;
    else if (s <= "O") answer += 7;
    else if (s <= "S") answer += 8;
    else if (s <= "V") answer += 9;
    else if (s <= "Z") answer += 10;
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
