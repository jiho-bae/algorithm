function solution(progresses, speeds) {
  const size = progresses.length;
  let curIndex = 0;
  let lastIndex = 0;
  let answer = [];

  while (true) {
    for (let i = curIndex; i < size; i++) {
      progresses[i] += speeds[i];
    }

    if (progresses[curIndex] >= 100) {
      for (let i = curIndex; i < size; i++) {
        if (progresses[i] < 100) break;
        lastIndex = i + 1;
      }
      answer.push(lastIndex - curIndex);
      curIndex = lastIndex;
      if (lastIndex === size) break;
    }
  }

  return answer;
}
