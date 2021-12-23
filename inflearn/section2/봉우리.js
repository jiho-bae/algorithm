function sol(arr) {
  const n = arr.length;
  let answer = 0;
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  const newArr = [];
  const edge = [...'0'.repeat(n + 2)].map(Number);
  newArr.push(edge);
  arr.forEach((row) => newArr.push([0, ...row, 0]));
  newArr.push(edge);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let clear = true;
      for (let k = 0; k < 4; k++) {
        if (newArr[i][j] <= newArr[i + dx[k]][j + dy[k]]) {
          clear = false;
          break;
        }
      }
      if (clear) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(sol(arr));
