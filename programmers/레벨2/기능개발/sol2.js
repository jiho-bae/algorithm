function solution(progresses, speeds) {
  const len = progresses.length;
  const days = new Array(len).fill(0);

  while (true) {
    let cnt = 0;
    for (let i = 0; i < len; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
        days[i]++;
        continue;
      }
      cnt++;
    }
    if (cnt === len) break;
  }

  const answer = [];
  let idx = 1;
  let day = days[0];
  let cnt = 1;
  while (days.length > idx) {
    if (day >= days[idx]) {
      cnt++;
    } else {
      answer.push(cnt);
      day = days[idx];
      cnt = 1;
    }
    idx++;
  }
  answer.push(cnt);
  return answer;
}
