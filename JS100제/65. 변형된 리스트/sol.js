/*
a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 ** [[1, a], [b, 2], [3, c], [d, 4]] ** 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

// 1. for문을 사용해보자!

function sol(arr1, arr2) {
  let answer = [];
  const len = arr1.length;
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      answer.push([arr1[i], arr2[i]]);
    } else {
      answer.push([arr2[i], arr1[i]]);
    }
  }
  return answer;
}

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = ["a", "b", "c", "d", "e", "f"];

sol(arr1, arr2);

// 2. map 함수를 이용해보자.

const sol2 = (arr1, arr2) => {
  return arr1.map((val, index) => {
    if (index % 2 === 0) return [val, arr2[index]];
    else return [arr2[index], val];
  });
};
let arr3 = ["q", "w", "e", "r", "t", "y"];
let arr4 = [9, 8, 7, 6, 5, 4, 3];

sol2(arr3, arr4);
