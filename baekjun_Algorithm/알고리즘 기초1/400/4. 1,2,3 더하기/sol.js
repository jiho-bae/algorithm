const sol = ([n, ...input]) => {
  let size = Math.max(...input);
  let arr = Array.from({ length: size + 1 }, () => 0);
  arr[1] = 1;
  arr[2] = 2;
  arr[3] = 4;
  for (let i = 4; i <= size; i++) arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];

  let answer = "";
  for (let x of input) answer += `${arr[x]}\n`;
  console.log(answer);
};

let input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
