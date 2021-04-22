/*
우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.
 */

//1. 연산자 활용

function solution(num) {
  const arr = [];
  let result = "";

  while (num) {
    arr.push(num % 2);
    num = Math.floor(num / 2);
  }

  arr.reverse();

  arr.forEach((n) => (result += n));
  return result;
}

let num = 16;
console.log(solution(num));

// 2. 메서드 활용

function solution(num) {
  return num.toString(2);
}

let num = 16;
console.log(solution(num));
