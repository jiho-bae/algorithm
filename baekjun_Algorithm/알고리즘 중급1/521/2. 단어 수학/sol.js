const sol = (input) => {
  const alphabetObj = {};
  input.slice(1).map((str) => {
    let size = 1;
    for (let i = str.length - 1; i >= 0; i--) {
      const word = str[i];
      if (alphabetObj[word]) alphabetObj[word] += size;
      else alphabetObj[word] = size;
      size *= 10;
    }
  });

  const alphabetArr = Object.entries(alphabetObj).sort((a, b) => b[1] - a[1]);

  let number = 9;
  let sum = 0;
  for (let i = 0; i < alphabetArr.length; i++) {
    sum += alphabetArr[i][1] * number--;
  }
  return sum;
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
