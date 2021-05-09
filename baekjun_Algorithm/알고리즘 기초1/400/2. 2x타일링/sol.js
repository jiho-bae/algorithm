const sol = (num) => {
  let arr = Array.from({ length: num + 1 }, () => 0);
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= num; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 10007;
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
