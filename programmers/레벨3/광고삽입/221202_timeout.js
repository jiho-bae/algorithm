function solution(play_time, adv_time, logs) {
  if (play_time === adv_time) return '00:00:00';

  const playSeconds = new Array(360000 + 1).fill(0);
  const advSeconds = timeToSeconds(adv_time);
  const startPoints = [];

  logs.forEach((log) => {
    const [startSeconds, endSeconds] = log.split('-').map(timeToSeconds);
    startPoints.push(startSeconds);

    for (let i = startSeconds; i < endSeconds; i++) {
      playSeconds[i] += 1;
    }
  });
  startPoints.sort((a, b) => a - b);

  let maxTimes = Number.MIN_SAFE_INTEGER;
  let answer = 0;

  startPoints.forEach((startPoint) => {
    let sumOfTimes = sum(playSeconds.slice(startPoint, startPoint + advSeconds));

    if (maxTimes < sumOfTimes) {
      maxTimes = sumOfTimes;
      answer = startPoint;
    }
  });

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

function sum(times) {
  return times.reduce((acc, val) => acc + val, 0);
}

/**
 * 시청자들이 가장 많이 보는 구간에 공익광고 넣기.
 * play_time, adv_time ==> HH:MM:SS, 00:00:01 ~ 99:59:59.
 * 1<= logs.length <= 30만.
 * log ==> H1:M1:S1-H2:M2:S2. 시작~종료시간.
 *
 * 동영상시간 = 재생시간 => 바로 정답.
 *
 *
 * 초로 환산하면?? 3600*99 + 60 * 59 + 59 <= 36만. 배열 원소 36만개.
 * 모든 시청자의 시청기록을 배열에 기록한 뒤, "공익광고 구간이 최댓값인곳을 구하면..."
 * O(NM) => 36만*36만 => 시간초과.
 * 따져야 할 기준... 각 로그의 시작시간부터 공익광고 구간만큼이 최대값인 구간을 구해야 하므로,,
 * 각 로그 시작지점만 따져서 구간합을 구해보자.
 *
 *
 * 시간초과..
 * ----점검할 부분-----
 * 1.로그의 시작~끝 더하는 부분
 * 2.로그의 시작 기준으로 광고 재생시간만큼의 구간합 구하는 부분
 */
