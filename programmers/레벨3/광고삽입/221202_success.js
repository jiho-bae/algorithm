function solution(play_time, adv_time, logs) {
  if (play_time === adv_time) return '00:00:00';

  const playTimes = timeToSeconds(play_time);
  const advSeconds = timeToSeconds(adv_time);
  const logPlayTimes = new Array(360000 + 1).fill(0);
  const startPoints = [];
  const endPoints = [];

  for (let log of logs) {
    const [startSeconds, endSeconds] = log.split('-').map(timeToSeconds);
    startPoints.push(startSeconds);
    endPoints.push(endSeconds);
  }

  startPoints.sort((a, b) => b - a);
  endPoints.sort((a, b) => b - a);

  let startTime = 0;
  let cnt = 0;

  while (startPoints.length || endPoints.length) {
    while (startTime === startPoints[startPoints.length - 1]) {
      cnt += 1;
      startPoints.pop();
    }

    while (startTime === endPoints[endPoints.length - 1]) {
      cnt -= 1;
      endPoints.pop();
    }

    logPlayTimes[startTime++] = cnt;
  }

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

  return secondsToTime(answer);
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

/**
 * 성공... (코드가 더러움)
 * ----변경한 부분 -----
 * 1.로그의 시작~끝 더하는 부분
 * 로그의 시작~끝을 초로 환산하여 배열에 담아둔 뒤,
 * 한번에 0~끝 초 까지 탐색하면서 모든 구간합을 구하도록 변경.
 *
 * 2.로그의 시작 기준으로 광고 재생시간만큼의 구간합 구하는 부분
 * 광고재생시간이 정해졌으므로, 시작~끝만큼의 구간합을 미리 구한뒤, 시작과 끝점을 1초씩 움직이며 맥스값 구하도록 변경..
 * 그래도 시간초과 발생
 */
