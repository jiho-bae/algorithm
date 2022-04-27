function sol(input) {
  const [A, B, C] = input.split(' ').map(Number);
  const set = new Set();

  function bfs() {
    const queue = [[0, 0, C]];
    const visits = {};
    while (queue.length) {
      let [curA, curB, curC] = queue.shift();

      if (visits[`${curA}/${curB}/${curC}`]) continue;
      visits[`${curA}/${curB}/${curC}`] = 1;

      if (curA === 0) {
        set.add(curC);
      }

      if (curA + curB > B) queue.push([curA + curB - B, B, curC]);
      else queue.push([0, curA + curB, curC]);

      if (curA + curC > C) queue.push([curA + curC - C, curB, C]);
      else queue.push([0, curB, curA + curC]);

      if (curB + curA > A) queue.push([A, curB + curA - A, curC]);
      else queue.push([curB + curA, 0, curC]);

      if (curB + curC > C) queue.push([curA, curB + curC - C, C]);
      else queue.push([curA, 0, curB + curC]);

      if (curC + curA > A) queue.push([A, curB, curC + curA - A]);
      else queue.push([curC + curA, curB, 0]);

      if (curC + curB > B) queue.push([curA, B, curC + curB - B]);
      else queue.push([curA, curC + curB, 0]);
    }
  }

  bfs();
  return [...set].sort((a, b) => a - b).join(' ');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
