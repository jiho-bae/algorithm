function checkFunc(n, arr) {
  let answer = 1;
  for (let i = 0; i < n; i++) {
    let temp = 1;
    for (let j = 0; j < n - 1; j++) {
      if (arr[i][j - 1] === arr[i][j]) temp++;
      else {
        answer = Math.max(answer, temp);
        temp = 1;
      }
    }
    answer = Math.max(answer, temp);
  }

  for (let i = 0; i < n; i++) {
    let temp = 1;
    for (let j = 0; j < n - 1; j++) {
      if (arr[j + 1][i] === arr[j][i]) temp++;
      else {
        answer = Math.max(answer, temp);
        temp = 1;
      }
    }
    answer = Math.max(answer, temp);
  }
  return answer;
}

function sol([n, ...arr]) {
  let answer = 0;
  n = +n;

  for (let i = 0; i < n; i++) {
    arr[i] = arr[i].split("");
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      [arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]];
      answer = Math.max(answer, checkFunc(n, arr));
      [arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]];

      [arr[j][i], arr[j + 1][i]] = [arr[j + 1][i], arr[j][i]];
      answer = Math.max(answer, checkFunc(n, arr));
      [arr[j][i], arr[j + 1][i]] = [arr[j + 1][i], arr[j][i]];
    }
  }
  console.log(answer);
}

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
