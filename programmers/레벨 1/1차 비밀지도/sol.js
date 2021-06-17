function solution(n, arr1, arr2) {
  const answer = [];
  let num1, num2, str;

  for (let i = 0; i < n; i++) {
    num1 = arr1[i];
    num2 = arr2[i];
    str = "";
    for (let j = 0; j < n; j++) {
      str = (num1 % 2) + (num2 % 2) > 0 ? `#${str}` : ` ${str}`;
      num1 = Math.floor(num1 / 2);
      num2 = Math.floor(num2 / 2);
    }
    answer.push(str);
  }
  return answer;
}
