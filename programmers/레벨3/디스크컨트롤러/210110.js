function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);
  const jobsLen = jobs.length;
  const queue = [];
  let cnt = 0;
  let endTime = 0;
  let jobsIdx = 0;
  let answer = 0;

  while (cnt < jobsLen) {
    while (jobsIdx < jobsLen && jobs[jobsIdx][0] <= endTime) {
      queue.push(jobs[jobsIdx++]);
    }
    queue.sort((a, b) => a[1] - b[1]);
    if (!queue.length) {
      endTime = jobs[jobsIdx][0];
    } else {
      const [reqTime, progressTime] = queue.shift();
      endTime += progressTime;
      answer += endTime - reqTime;
      cnt++;
    }
  }

  return Math.floor(answer / jobsLen);
}
