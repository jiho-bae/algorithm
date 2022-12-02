function solution(play_time, adv_time, logs) {
  if (play_time === adv_time) return '00:00:00';

  const playSeconds = new Array(360000 + 1).fill(0);
  const advSeconds = timeToSeconds(adv_time);

  logs.forEach((log) => {
    const [startSeconds, endSeconds] = log.split('-').map(timeToSeconds);

    for (let i = startSeconds; i < endSeconds; i++) {
      playSeconds[i] += 1;
    }
  });

  let maxTimes = Number.MIN_SAFE_INTEGER;
  let answer = 0;

  let start = 0;
  let end = advSeconds;
  let sumOfTimes = logPlayTimes.slice(start, end).reduce((acc, val) => acc + val, 0);
  maxTimes = sumOfTimes;

  while (end <= playTimes) {
    sumOfTimes = sumOfTimes + logPlayTimes[end++] - logPlayTimes[start++];

    if (sumOfTimes > maxTimes) {
      maxTimes = sumOfTimes;
      answer = start;
    }
  }
}

function timeToSeconds(time) {
  const [hours, mins, seconds] = time.split(':').map(Number);
  return hours * 3600 + mins * 60 + seconds;
}

function secondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;

  const mins = Math.floor(seconds / 60);
  seconds -= mins * 60;

  return [hours, mins, seconds].map(padStartTime).join(':');
}

function padStartTime(time) {
  return String(time).padStart(2, '0');
}

function sum(times) {
  return times.reduce((acc, val) => acc + val, 0);
}

/**
 * 시간초과..
 * ----변경한 부분 -----
 * 2.로그의 시작 기준으로 광고 재생시간만큼의 구간합 구하는 부분
 * 광고재생시간이 정해졌으므로, 시작~끝만큼의 구간합을 미리 구한뒤, 시작과 끝점을 1초씩 움직이며 맥스값 구하도록 변경..
 * 그래도 시간초과 발생
 *
 *
 * ----변경해야 할 부분---
 *  1.로그의 시작~끝 더하는 부분
 */
