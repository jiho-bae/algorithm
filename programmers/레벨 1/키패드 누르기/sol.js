function solution(numbers, hand) {
  let left = 10;
  let right = 12;
  let ltDist, rtDist;
  const center = [2, 5, 8, 11];
  let answer = "";

  function add(pos, num) {
    if (pos === "L") left = num;
    else right = num;
    answer += pos;
  }

  for (let i = 0; i < numbers.length; i++) {
    let num = +numbers[i];
    if (num === 0) num = 11;
    if (num === 1 || num === 4 || num === 7) add("L", num);
    else if (num === 3 || num === 6 || num === 9) add("R", num);
    else {
      ltDist = center.includes(left)
        ? Math.abs(num - left) / 3
        : Math.abs(num - 1 - left) / 3 + 1;
      rtDist = center.includes(right)
        ? Math.abs(num - right) / 3
        : Math.abs(num + 1 - right) / 3 + 1;
      if (ltDist > rtDist) add("R", num);
      else if (ltDist < rtDist) add("L", num);
      else {
        if (hand === "left") add("L", num);
        else add("R", num);
      }
    }
  }
  return answer;
}
