/*
페이지 교체 알고리즘은 메모리를 관리하는 운영체제에서, 페이지 부재가 발생하여 새로운 페이지를 할당하기 위해 현재 **할당된 페이지 중 어느 것을 교체할지를 결정하는 방법**입니다.
이 알고리즘이 사용되는 시기는 페이지 부재(Page Fault)가 발생해 새로운 페이지를 적재해야 하지만 페이지를 적재할 공간이 없어 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용됩니다. 빈 페이지가 없는 상황에서 메모리에 적재된 페이지와 적재할 페이지를 교체함으로 페이지 부재 문제를 해결할 수 있습니다.
[(wikipedia)](https://ko.wikipedia.org/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80_%EA%B5%90%EC%B2%B4_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)

이 중 선입선출(FIFO) 알고리즘은 가장 먼저 들어와서 가장 오래있었던 페이지를 우선으로 교체시키는 방법을 의미합니다. 아래의 그림을 참고해주세요.
*/

function sol(input, frame) {
  let time = 0;
  const HIT = 1;
  const MISS = 6;
  let queue = Array.from({ length: frame }, () => 0);
  for (let x of input) {
    if (queue.includes(x)) time += HIT;
    else {
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
