function sol(input) {
  const [H, W] = input[0].split(' ').map(Number);
  const N = +input[1];
  const stickers = input.slice(2).map((str) => {
    const [r, c] = str.split(' ').map(Number);
    if (r <= c) return [r, c];
    return [c, r];
  });

  function checkW(w1, h1, w2, h2) {
    if (w1 + w2 <= W && Math.max(h1, h2) <= H) return true;
    return false;
  }

  function checkH(w1, h1, w2, h2) {
    if (h1 + h2 <= H && Math.max(w1, w2) <= W) return true;
    return false;
  }

  function checkWandH(w1, h1, w2, h2) {
    if (checkW(w1, h1, w2, h2) || checkH(w1, h1, w2, h2)) return true;
    return false;
  }

  let answer = 0;

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      const [w1, h1] = stickers[i];
      const [w2, h2] = stickers[j];
      const case1 = checkWandH(w1, h1, w2, h2);
      const case2 = checkWandH(w1, h1, h2, w2);
      const case3 = checkWandH(h1, w1, w2, h2);
      const case4 = checkWandH(h1, w1, h2, w2);

      if (case1 || case2 || case3 || case4)
        answer = Math.max(answer, w1 * h1 + w2 * h2);
    }
  }

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
