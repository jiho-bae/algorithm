function sol(arr) {
  let score = 0;
  return arr.reduce((acc, val) => {
    if (val === 1) {
      return acc + ++score;
    } else {
      score = 0;
      return acc;
    }
  }, 0);
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(sol(arr));
