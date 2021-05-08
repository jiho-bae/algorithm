const sol = (num) => {
  let arr = new Array(num);
  arr[1] = 0;
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + 1;
    if (i % 3 === 0) arr[i] = Math.min(arr[i], arr[i / 3] + 1);
    if (i % 2 === 0) arr[i] = Math.min(arr[i], arr[i / 2] + 1);
  }
  console.log(arr[num]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(+line);
  })
  .on("close", () => {
    process.exit();
  });
