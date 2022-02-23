function sol(input) {
  const meetingSchedules = input
    .slice(1)
    .map((str) => str.split(' ').map(Number))
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let answer = 0;
  let curTime = 0;

  meetingSchedules.forEach(([start, end]) => {
    if (start >= curTime) {
      curTime = end;
      answer++;
    }
  });

  return answer;
}

const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
