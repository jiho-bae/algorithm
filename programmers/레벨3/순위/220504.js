function solution(N, results) {
  const ranks = {};

  results.forEach(([win, lost]) => {
    if (!ranks.hasOwnProperty(win)) {
      ranks[win] = { up: [], down: [] };
    }
    if (!ranks.hasOwnProperty(lost)) {
      ranks[lost] = { up: [], down: [] };
    }
    ranks[win].down.push(lost);
    ranks[lost].up.push(win);
  });

  Object.values(ranks).forEach(({ up, down }) => {
    up.forEach(
      (target) =>
        (ranks[target].down = [...new Set([...ranks[target].down, ...down])])
    );
    down.forEach(
      (target) =>
        (ranks[target].up = [...new Set([...ranks[target].up, ...up])])
    );
  });

  let answer = 0;

  Object.values(ranks).forEach(({ up, down }) => {
    if (up.length + down.length === N - 1) {
      answer += 1;
    }
  });

  return answer;
}
