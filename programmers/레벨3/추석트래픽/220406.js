function solution(lines) {
  if (lines.length === 1) return 1;
  const lineLen = lines.length;
  const miliSecSize = 1000;

  const startTimes = [];
  const endTimes = [];
  let answer = 0;

  function getTimeAndDurationFromLog(log) {
    const [_, time, duration] = log.split(' ');
    return [time, duration];
  }

  function getEndMiliSecTime(time) {
    const hour = +time.slice(0, 2);
    const minute = +time.slice(3, 5);
    const second = +time.slice(6, 8);
    const miliSec = +time.slice(9);

    return (hour * 3600 + minute * 60 + second) * miliSecSize + miliSec;
  }

  function getStartMiliSecTime(endMiliSecTime, duration) {
    const miliSecDuration = +duration.slice(0, -1) * miliSecSize;
    return endMiliSecTime - miliSecDuration + 1;
  }

  lines.forEach((line) => {
    const [time, duration] = getTimeAndDurationFromLog(line);
    const endMiliSecTime = getEndMiliSecTime(time);
    const startMiliSecTime = getStartMiliSecTime(endMiliSecTime, duration);
    startTimes.push(startMiliSecTime);
    endTimes.push(endMiliSecTime);
  });

  for (let i = 0; i < lineLen; i++) {
    let cnt = 0;
    let currentTime = endTimes[i];

    cnt += startTimes
      .slice(i)
      .filter((startTime) => currentTime > startTime - miliSecSize).length;
    answer = Math.max(answer, cnt);
  }

  return answer;
}
