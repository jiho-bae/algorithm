/*
쉔은 회전 초밥집에 갔습니다.
초밥집에 간 쉔은 각 초밥에 점수를 매기고 낮은 점수의 순서로 초밥을 먹으려 합니다.
이때 n위치에 놓여진 초밥을 먹고자 할 때 접시가 몇 번 지나가고 먹을 수 있을지 출력하세요.

1. 초밥은 놓여진 위치에서 옮겨지지 않습니다.
2. 지나간 초밥은 나머지 초밥이 지나간 후에 다시 돌아옵니다.
3. 초밥은 1개 이상 존재합니다.

예)
A, B, C, D, E 초밥이 있고 각 점수가 1, 1, 3, 2, 5 일 때 3번째(C초밥)을 먹게 되는 순서는
점수가 1인 초밥 A와 B를 먹고 다음으로 점수가 2인 D 초밥을 먹어야 됩니다.
A B C D E 의 순서로 접시가 도착하지만 C가 도착했을때 먹지 못하는 상황이 옵니다.
2점을 주었던 D를 먼저 먹어야 C를 먹을 수 있습니다. 
즉, A B C D E C 의 순서로, 접시가 5번 지나가고 먹게 된다.
*/

function sol(point, dish) {
  if (point.length === 1) return 1;
  let order = 0;
  dish -= 1;
  while (true) {
    if (point[0] === Math.min(...point)) {
      point.shift();
      if (dish === 0) break;
    } else point.push(point.shift());
    if (dish === 0) dish = point.length - 1;
    else dish--;
    order++;
  }
  return order;
}

let p = [1, 1, 3, 2, 5];
let d = 3;
console.log(sol(p, d));

let p2 = [5, 2, 3, 1, 2, 5];
let d2 = 1;
console.log(sol(p2, d2));
