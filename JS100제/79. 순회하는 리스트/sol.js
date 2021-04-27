/*
다음의 값이 주어졌을 때
l = [10, 20, 25, 27, 34, 35, 39]

n번 순회를 결정합니다. 예를 들어 2번 순회하면

l = [35, 39, 10, 20, 25, 27, 34]

여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.
*/

function sol(l, n) {
  let rotateL = l.slice();
  for (let i = 0; i < n; i++) {
    rotateL.unshift(rotateL.pop());
  }

  let min = Number.MAX_SAFE_INTEGER;
  let idx = -1;
  for (let i = 0; i < l.length; i++) {
    if (min > Math.abs(l[i] - rotateL[i])) {
      min = Math.abs(l[i] - rotateL[i]);
      idx = i;
    }
  }

  return [idx, l[idx], rotateL[idx]];
}

let l = [10, 20, 25, 27, 34, 35, 39];
const n = 2;
console.log(sol(l, n));

const k = 3;
console.log(sol(l, k));
