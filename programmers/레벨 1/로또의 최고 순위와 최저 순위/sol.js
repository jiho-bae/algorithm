function solution(lottos, win_nums) {
  let rank = [6, 6, 5, 4, 3, 2, 1];
  let unknown = 0;
  let cnt = 0;
  for (let lotto of lottos) {
    if (lotto === 0) {
      unknown++;
      continue;
    }
    if (win_nums.includes(lotto)) {
      cnt++;
      continue;
    }
  }
  return [rank[cnt + unknown], rank[cnt]];
}
