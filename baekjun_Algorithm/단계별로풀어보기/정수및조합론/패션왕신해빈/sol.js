const sol = (input) => {
  const T = +input[0];
  let answer = "";

  let n;
  let cnt = 0;
  let i = 1;
  while (cnt !== T) {
    n = +input[i];
    const obj = {};
    for (let j = i + 1; j <= i + n; j++) {
      const [_, key] = input[j].split(" ");
      if (obj[key]) obj[key] += 1;
      else obj[key] = 1;
    }

    const arr = Object.values(obj);
    if (arr.length === 1) answer += `${arr[0]}\n`;
    else answer += `${arr.reduce((s, v) => s * (v + 1), 1) - 1}\n`;
    cnt++;
    i += n + 1;
  }
  return answer;
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
