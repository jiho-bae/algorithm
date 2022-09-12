/* 
    테케 3번 : while문이 cursor+k === len-1 일 때도 돌아가줘야 한다.
    효율성 13번은 여전히 안나오니...
    지금처럼 cursor+1 ~ cursor+k까지 모두 검사한 뒤에 이동시키지 말고
    currentMax(=cnt) 값보다 크면 바로바로 이동시키자.
    남은 디딤돌의 숫자가 currentMax보다 작을수도 있으니 따로 최댓값도 기록해둔다.
    더 빨리 이동시키기 위해 가능한 점프거리 맨 뒤에서부터 카운트한다.

    그래도 효율성 13은 해결 안된다.
    --> 리스트에서 max를 찾고... max의 인덱스부터 다시 k만큼 조사해야 하는 것이 문제인 듯 하다.
    --> 여기에 memoize를 적용할 수 있나..?
*/

function solution(stones, k) {
  const len = stones.length;

  let currentMax = Number.MIN_SAFE_INTEGER;
  let cursor = -1;

  for (let i = 0; i < k; i++) {
    if (stones[i] > currentMax) {
      currentMax = stones[i];
      cursor = i;
    }
  }

  while (cursor + k < len) {
    let max = Number.MIN_SAFE_INTEGER;
    let maxIdx = -1;
    let flag = false;
    const end = Math.min(cursor + k, len - 1);

    for (let i = end; i > cursor; i--) {
      if (stones[i] >= currentMax) {
        cursor = i;
        flag = true;
        break;
      } else if (stones[i] >= max) {
        max = stones[i];
        maxIdx = i;
      }
    }

    if (flag) continue;

    currentMax = Math.min(currentMax, max);
    cursor = maxIdx;
  }

  return currentMax;
}
