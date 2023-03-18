function solution(cards1, cards2, goal) {
  const len = goal.length;
  const cur = [];

  while (cur.length < len) {
    const target = goal.shift();
    let isShift = false;

    if (target === cards1[0]) {
      cards1.shift();
      isShift = true;
    } else if (target === cards2[0]) {
      cards2.shift();
      isShift = true;
    }

    if (!isShift) return 'No';
    cur.push(target);
  }

  return 'Yes';
}
