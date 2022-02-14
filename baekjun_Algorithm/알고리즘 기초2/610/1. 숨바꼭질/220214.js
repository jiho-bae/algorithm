require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });

function move(pos) {
  return [pos * 2, pos + 1, pos - 1];
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
      const movePosition = move(now);
      for (pos of movePosition) {
        if (pos < 0 || pos > 100000) continue;
        if (visits[pos]) continue;
        visits[pos] = 1;
        queue.push([pos, time + 1]);
      }
    }
  }

  bfs();
  return answer;
}
