function sol(input) {
  const t = +input[0];
  const answer = [];
  const FLIP = 'R';
  const DEL = 'D';
  const LT = 'lt';
  const RT = 'rt';
  let cnt = 0;

  function checkEmpty(lt, rt) {
    if (lt - rt > 0) return true;
    return false;
  }
  while (++cnt <= t) {
    let isError = false;
    let [p, n, arr] = input.slice(1 + 3 * (cnt - 1), 1 + 3 * (cnt - 1) + 3);
    n = +n;
    if (n === 0 && p.includes('D')) {
      answer.push('error');
      continue;
    }

    arr = arr.slice(1, arr.length - 1).split(',');
    if (arr[0] === '') arr = [];

    const idx = {
      lt: 0,
      rt: arr.length === 0 ? 0 : arr.length - 1,
    };
    let dir = LT;

    for (let cmd of p) {
      if (cmd === FLIP) {
        dir = dir === LT ? RT : LT;
      } else if (cmd === DEL) {
        if (checkEmpty(idx.lt, idx.rt)) {
          answer.push('error');
          isError = true;
          break;
        } else {
          if (dir === LT) idx[dir]++;
          else if (dir === RT) idx[dir]--;
        }
      }
    }

    if (isError) continue;
    let target = arr.slice(idx.lt, idx.rt + 1);
    if (dir === RT) target.reverse();
    answer.push(`[${target.join(',')}]`);
  }

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
