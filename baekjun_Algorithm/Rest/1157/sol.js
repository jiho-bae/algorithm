function sol(str) {
  str = str.toUpperCase().split("");
  const arr = new Array(26).fill(0);
  const maxObj = {
    idx: -1,
    val: Number.MIN_SAFE_INTEGER,
  };

  str.map((x) => {
    const idx = x.charCodeAt() - 65;
    arr[idx]++;
    if (maxObj.val < arr[idx]) {
      maxObj.val = arr[idx];
      maxObj.idx = idx;
    }
  });

  const length = arr.filter((size) => size === maxObj.val).length;
  return length > 1 ? "?" : String.fromCharCode(maxObj.idx + 65);
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
