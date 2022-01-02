function solution(n, left, right) {
  const arr = [];

  for (let lt = left; lt <= right; lt++) {
    arr.push(Math.max(parseInt(lt / n), lt % n) + 1);
  }
  return arr;
}
