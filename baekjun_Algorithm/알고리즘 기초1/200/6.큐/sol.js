const queue = [];
let rear = 0;
let answer = "";

const cmdObj = {
  push: (x) => (queue[rear++] = x),
  pop: () => {
    if (rear) {
      rear--;
      return queue.splice(0, 1);
    } else return -1;
  },
  size: () => rear,
  empty: () => (!rear ? 1 : 0),
  front: () => (rear ? queue[0] : -1),
  back: () => (rear ? queue[rear - 1] : -1),
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  input.map((line, idx) => {
    if (idx === 0) return;
    const [cmd, num] = line.split(" ");
    if (cmd === "push") {
      cmdObj[cmd](parseInt(num));
    } else answer += `${cmdObj[cmd]()}\n`;
  });

  console.log(answer);
  process.exit();
});
