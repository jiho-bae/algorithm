function solution(n, words) {
  const answer = [];
  let now = words[0];
  let cnt = 1,
    order = 1;

  answer.push(now);
  words = words.slice(1);

  for (let next of words) {
    if (++order > n) {
      order = 1;
      cnt++;
    }
    if (
      next.length < 2 ||
      now[now.length - 1] !== next[0] ||
      answer.includes(next)
    )
      return [order, cnt];
    answer.push(next);
    now = next;
  }
  return [0, 0];
}
