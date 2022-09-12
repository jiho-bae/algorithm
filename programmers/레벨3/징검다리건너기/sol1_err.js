/* 
    0부터 k-1 인덱스 중 최댓값의 위치인 cursor부터 시작하기.
    cursor부터 1~k칸까지 건너뛸 수 있음.
    cursor+1 ~ cursor+k칸까지 검사하여 최댓값이 위치한 가장 먼 인덱스를 추출.
    해당 구간의 최댓값과 현재 최댓값 중 작은 값이 현재 최댓값이 된다.
    현재 칸에서 k칸 내에 마지막칸이 위치하면(징검다리를 모두 건넜다.) while문 종료.
*/

// 테스트케이스3 실패, 효율성13 시간초과 발생.

function solution(stones, k) {
  const len = stones.length;
  let cnt = Number.MIN_SAFE_INTEGER;
  let cursor = -1;

  for (let i = 0; i < k; i++) {
    if (stones[i] > cnt) {
      cnt = stones[i];
      cursor = i;
    }
  }

  while (cursor + k < len - 1) {
    let max = Number.MIN_SAFE_INTEGER;
    let maxIdx = -1;
    const end = Math.min(cursor + 1 + k, len);

    for (let i = cursor + 1; i < end; i++) {
      if (stones[i] >= max) {
        max = stones[i];
        maxIdx = i;
      }
    }

    cursor = maxIdx;
    cnt = Math.min(cnt, max);
  }

  return cnt;
}
