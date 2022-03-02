function sol(input) {
  let N = +input[0];
  const papers = input.slice(1).map((str) => str.split(' ').map(Number));
  const answer = [0, 0, 0];

  function findPaper(sx, sy, size) {
    const target = papers[sx][sy];
    if (size === 1) {
      answer[target + 1]++;
      return;
    }
    let flag = 0;

    for (let x = sx; x < sx + size; x++) {
      if (flag) break;
      for (let y = sy; y < sy + size; y++) {
        if (papers[x][y] !== target) {
          flag = 1;
          break;
        }
      }
    }

    if (flag) {
      const nextSize = size / 3;
      for (let x = sx; x < sx + size; x += nextSize) {
        for (let y = sy; y < sy + size; y += nextSize) {
          findPaper(x, y, nextSize);
        }
      }
    } else answer[target + 1]++;
  }

  findPaper(0, 0, N);

  return answer.join('\n');
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
