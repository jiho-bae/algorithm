/*
정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

입력
정량 N이 입력됩니다.

출력
가장 적게 옮길 수 있는 횟수를 출력합니다.
만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
*/

// 스스로 작성해보기. for문 중첩으로 모두 조회하려는 시도를 하였음.

function sol(n, a, b) {
  let min = Number.MAX_SAFE_INTEGER;
  let aLen = Math.floor(n / a);
  let bLen = Math.floor(n / b);
  let cnt = 0;
  for (let i = 0; i <= aLen; i++) {
    for (let j = 0; j <= bLen; j++) {
      const weight = a * i + b * j;
      if (weight > n) break;
      if (weight === n) {
        cnt++;
        min = Math.min(min, i + j);
      }
    }
  }
  if (cnt === 0) return -1;
  return min;
}

sol(24, 7, 3);

// 답안 코드 보고 이해하기
// 나르는 횟수가 적어야 하므로, 3보다 7을 더 사용해야 한다.
// 그러므로 모든 무게를 7로 모두 다 나를 수 있는 경우가 최소의 경우이며,
// 그렇지 않다면 3을 하나씩 추가시키면서 7로 나머지를 모두 나를 수 있는지를 계속 봐야 한다.
// 만약 끝까지 그럴 수 없다면, (ex. 엘리베이터가 견디는 하중이 8kg라면 3,7로는 불가능) -1을 리턴한다.
const sol2 = (n) => {
  let result = 0;
  while (true) {
    if (n % 7 === 0) {
      result += parseInt(n / 7);
      return result;
    }
    n -= 3;
    result += 1;
    if (N < 0) {
      return -1;
    }
  }
};
sol2(24);
