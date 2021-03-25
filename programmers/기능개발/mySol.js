function solution(progresses, speeds) {
  const size = progresses.length;
  let curIndex = 0;
  let lastIndex = 0;
  let answer = [];

  outer: while (true) {
    for (let i = curIndex; i < size; i++) {
      progresses[i] += speeds[i];
    }

    if (progresses[curIndex] >= 100) {
      inner: for (let i = curIndex; i < size; i++) {
        if (progresses[i] >= 100) {
          lastIndex = i + 1;
        } else {
          break inner;
        }
      }
      answer.push(lastIndex - curIndex);
      curIndex = lastIndex;
    }
    if (lastIndex === size) {
      break outer;
    }
  }

  return answer;
}
