const arr = [1, 2, 3, 4, 5];
const len = arr.length;
const answer = [];

function combination(L, idx, comb, cnt) {
  if (L === cnt) {
    answer.push(comb);
    return;
  }

  for (let i = idx; i < len; i++) {
    combination(L + 1, i + 1, [...comb, arr[i]], cnt);
  }
}

combination(0, 0, [], 3);
// 3개씩 추출한 조합
