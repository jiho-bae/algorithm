function solution(n, t, m, timetable) {
  let hour = 9;
  let minute = 0;
  let waitIdx = 0;
  let serviceFrequency = 0;
  const answer = [9, 0];

  timetable.sort();

  function getTimeFromStr(timeStr) {
    return timeStr.split(':').map(Number);
  }

  function get1MinPrevTime(h, m) {
    if (m >= 1) {
      return [h, m - 1];
    } else {
      return [h - 1, 59];
    }
  }

  function updateNextServiceTime() {
    if (minute + t >= 60) {
      hour += 1;
      minute = minute + t - 60;
    } else {
      minute += t;
    }
  }

  function reportTime(h = hour, m = minute) {
    answer[0] = h;
    answer[1] = m;
  }

  while (serviceFrequency < n) {
    serviceFrequency += 1;
    let passengersCnt = 0;

    while (1) {
      if (passengersCnt < m) {
        const timeStr = timetable[waitIdx];
        if (!timeStr) break;
        const [pHour, pMin] = getTimeFromStr(timeStr);

        if (pHour < hour || (pHour === hour && pMin <= minute)) {
          if (passengersCnt === m - 1) {
            const [rHour, rMin] = get1MinPrevTime(pHour, pMin);
            reportTime(rHour, rMin);
          }
          waitIdx += 1;
          passengersCnt += 1;
          continue;
        }
      }
      break;
    }

    if (passengersCnt < m) {
      reportTime();
    }
    updateNextServiceTime();
  }

  const answerStr = answer
    .map((time) => String(time).padStart(2, '0'))
    .join(':');
  return answerStr;
}
