/*
가장 긴 공통 부분 문자열(Longest Common Subsequence)이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

이처럼 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램을 만들어 주세요.

두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.
*/

function sol(min, max) {
  if (min.length > max.length) [min, max] = [max, min];

  function splitStr(str) {
    let arr = [];
    for (let i = 1; i <= str.length; i++) {
      for (let j = 0; j < i; j++) {
        arr.push(str.slice(j, i));
      }
    }
    return arr;
  }

  const splitMin = splitStr(min);
  const splitMax = splitStr(max);
  let intersect = splitMin.filter((x) => splitMax.includes(x));
  intersect.sort((a, b) => b.length - a.length);

  return intersect[0].length;
}

// Q1
let a = "THISISSTRINGS";
let b = "TATHISISKKQQAEW";
sol(a, b);
// Q2
let c = "THISISSTRINGS";
let d = "KIOTHIKESSISKKQQAEW";
sol(c, d);
