require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });

function sol(input) {
  const S = +input;
  const MAX_SIZE = 1001;
  const visits = Array.from({ length: MAX_SIZE }, () =>
    new Array(MAX_SIZE).fill(0)
  );
  let answer;

  function bfs(val) {
    const queue = [[val, 0, 0]];

    while (queue.length) {
      const [now, time, clipboard] = queue.shift();

      if (now === S) {
        answer = time;
        return;
      }

      if (!visits[now][now]) {
        visits[now][now] = 1;
        queue.push([now, time + 1, now]);
      }

      const paste = now + clipboard;
      if (clipboard > 0 && paste < MAX_SIZE && !visits[paste][clipboard]) {
        visits[paste][clipboard] = 1;
        queue.push([paste, time + 1, clipboard]);
      }

      if (!visits[now - 1][clipboard] && now > 1) {
        visits[now - 1][clipboard] = 1;
        queue.push([now - 1, time + 1, clipboard]);
      }
    }
  }

  bfs(1);
  return answer;
}
