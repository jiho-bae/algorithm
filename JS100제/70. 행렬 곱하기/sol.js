/*
행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.
*/

function sol(m1, m2) {
  const len1 = m1[0].length;
  const len2 = m2.length;
  if (len1 !== len2) return -1;
  let answer = 0;

  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m2[0].length; j++) {
      for (let k = 0; k < len1; k++) {
        answer += m1[i][k] * m2[k][j];
      }
    }
  }
  return answer;
}

let a = [
  [1, 2, 3],
  [2, 4, 5],
];

let b = [
  [1, 0],
  [0, 3],
  [2, 1],
];
sol(a, b);
