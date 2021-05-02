let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let str = input[0].split("");
let len = input[1];
let cursor = str.length;
for (let i = 2; i < 2 + len; i++) {
  let [cmd, value] = input[i].split(" ");
  if (cmd === "L") {
    if (!cursor) continue;
    cursor--;
  } else if (cmd === "D") {
    if (cursor === str.length) continue;
    cursor++;
  } else if (cmd === "B") {
    if (!cursor) continue;
    str.splice(cursor - 1, 1);
    cursor--;
  } else if (cmd === "P") {
    str.splice(cursor, 0, value);
    cursor++;
  }
}
console.log(str.join(""));
