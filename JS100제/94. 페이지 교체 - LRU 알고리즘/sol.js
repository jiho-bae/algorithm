/*
LRU 알고리즘이란 페이지 교체 알고리즘으로써, Least Resently Used의 약자입니다. 즉 페이지 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 페이지를 제거하는 알고리즘입니다.
이 알고리즘의 기본 가설은 가장 오랫동안 이용되지 않은 페이지는 앞으로도 사용할 확률이 적다는 가정하에 페이지 교체가 진행됩니다.
다음 그림을 참고해주세요.
*/

function sol(input, frame) {
  let time = 0;
  const HIT = 1;
  const MISS = 6;

  let queue = Array.from({ length: frame }, () => 0);
  for (let x of input) {
    if (queue.includes(x)) {
      time += HIT;
      queue.push(queue.splice(queue.indexOf(x), 1)[0]);
    } else {
      queue.shift();
      queue.push(x);
      time += MISS;
    }
  }
  return time;
}

let input = "BCBAEBCE";
console.log(sol(input, 3));

let input2 = "ABCABCABC";
console.log(sol(input2, 3));

let input3 = "ABCDABEABCDE";
console.log(sol(input3, 4));
