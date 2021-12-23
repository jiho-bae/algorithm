function sol(arr) {
  const n = arr.length;
  const score = [...arr].sort((a, b) => b - a);

  return arr.map((elem) => score.indexOf(elem) + 1);
}

let arr = [87, 89, 92, 100, 76];
console.log(sol(arr));

let arr2 = [87, 89, 92, 100, 76, 76, 75, 89];
console.log(sol(arr2));
