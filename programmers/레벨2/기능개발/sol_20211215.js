function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length) {
    const len = progresses.length;
    let cnt = 0;

    for (let i = 0; i < len; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }
    if (cnt) answer.push(cnt);
  }

  return answer;
}
