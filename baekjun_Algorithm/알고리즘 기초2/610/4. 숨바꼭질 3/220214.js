require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });

function move(pos, time) {
  return [
    [pos * 2, time],
    [pos + 1, time + 1],
    [pos - 1, time + 1],
  ];
}

function sol(input) {
  const [N, K] = input.split(' ').map(Number);
  const visits = Array.from({ length: 100001 }, () => 0);
  let answer;

  function bfs() {
    const queue = [[N, 0]];

    while (queue.length) {
      const [now, time] = queue.shift();
      visits[now] = 1;

      if (now === K) {
        answer = time;
        return;
      }
      const movePosition = move(now, time);
      for ([nextPos, nextTime] of movePosition) {
        if (nextPos < 0 || nextPos > 100000) continue;
        if (visits[nextPos]) continue;
        visits[nextPos] = 1;
        if (time === nextTime) {
          if (nextPos <= 2 * K) {
            queue.unshift([nextPos, nextTime]);
          }
        } else {
          queue.push([nextPos, nextTime]);
        }
      }
    }
  }

  bfs();
  return answer;
}
