function solution(x) {
  let hashad = (x + "").split("").reduce((sum, value) => sum + +value, 0);

  return x % hashad === 0 ? true : false;
}
