function sol(input) {
  const X = +input;
  if (X === 1) return "1/1";
  let size = 1,
    num = 1;
  let cnt = 0;
  while (true) {
    size++;
    cnt += num;
    if (cnt >= X) break;
    num++;
  }

  const fraction = size % 2 ? [size - 1, 1] : [1, size - 1];

  while (true) {
    if (cnt === X) break;
    if (size % 2) {
      fraction[0]--;
      fraction[1]++;
    } else {
      fraction[0]++;
      fraction[1]--;
    }
    cnt--;
  }
  return fraction.join("/");
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
