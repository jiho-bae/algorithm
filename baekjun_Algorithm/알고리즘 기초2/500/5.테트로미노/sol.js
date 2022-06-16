const sol = (input) => {
  const [N, M] = input[0].map((v) => +v);
  const arr = [];

  const check1 = (i, j) => {
    if (j + 3 >= M) return -1;

    let sum = 0;
    sum += arr[i][j];
    sum += arr[i][j + 1];
    sum += arr[i][j + 2];
    sum += arr[i][j + 3];
    return sum;
  };
  const check2 = (i, j) => {
    if (i + 1 >= N || j + 1 >= M) return -1;
    let sum = 0;
    sum += arr[i][j];
    sum += arr[i][j + 1];
    sum += arr[i + 1][j];
    sum += arr[i + 1][j + 1];
    return sum;
  };

  const check3 = (i, j) => {
    if (i + 2 >= N || j + 1 >= M) return -1;
    let sum = 0;
    sum += arr[i][j];
    sum += arr[i + 1][j];
    sum += arr[i + 2][j];
    sum += arr[i + 2][j + 1];
    return sum;
  };
  const check4 = (i, j) => {
    if (i + 2 >= N || j + 1 >= M) return -1;
    let sum = 0;
    sum += arr[i][j];
    sum += arr[i + 1][j];
    sum += arr[i + 1][j + 1];
    sum += arr[i + 2][j + 1];
    return sum;
  };
    
    const check5 = (i, j) => {
        if(i+)
    }

  for (let i = 1; i < input.length; i++) {
    arr.push(input.split(" ").map((v) => +v));
  }
};

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
