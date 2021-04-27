/*
기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰습니다.
음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았어요.

기린은 배가 너무 고파 혼자 음식을 먹기 시작합니다. 원형 테이블에는 N 개의 음식들이 있습니다.
한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.

마지막으로 남는 음식은 어떤 접시인가요?
*/

function sol(n, k) {
  const queue = Array.from({ length: n }, (v, i) => i + 1);
  let cnt = 1;
  while (queue.length !== 2) {
    if (cnt === k) {
      queue.shift();
      cnt = 1;
    }
    queue.push(queue.shift());
    cnt++;
  }
  return queue;
}

let n = 7;
let k = 3;
sol(n, k);
