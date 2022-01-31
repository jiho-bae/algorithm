function sol([n, brackets]) {
  n = +n;
  brackets = brackets.split(' ');
  const visits = new Array(10).fill(0);
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  function recursion(L, str) {
    if (L === n) {
      max = Math.max(max, str);
      min = Math.min(min, str);
      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (visits[i]) continue;
      if (
        (brackets[L] === '<' && +str[L] < i) ||
        (brackets[L] === '>' && +str[L] > i)
      ) {
        visits[i] = 1;
        recursion(L + 1, `${str}${i}`);
        visits[i] = 0;
      }
    }
  }

  for (let i = 0; i <= 9; i++) {
    visits[i] = 1;
    recursion(0, `${i}`);
    visits[i] = 0;
  }

  return [max, String(min).padStart(n + 1, '0')].join('\n');
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
