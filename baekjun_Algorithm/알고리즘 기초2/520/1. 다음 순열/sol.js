const sol = ([N, str]) => {
  N = +N;
  const arr = str.split(" ").map((v) => +v);
  const backArr = [];
  let cur = Number.MAX_SAFE_INTEGER;

  while (cur > arr[arr.length - 1]) {
    cur = arr.pop();
    backArr.push(cur);
  }
  if (backArr.length === N) return -1;

  let max = Number.MIN_SAFE_INTEGER;
  let idx = 0;
  for (let i = 0; i < backArr.length; i++) {
    if (backArr[i] < arr[arr.length - 1] && backArr[i] > max) {
      max = backArr[i];
      idx = i;
    }
  }
  [backArr[idx], arr[arr.length - 1]] = [arr[arr.length - 1], backArr[idx]];
  let result = `${arr.join(" ")} ${backArr.join(" ")}`;
  return result;
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
