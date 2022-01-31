function sol([n, str]) {
  n = +n;
  const s = new Array(10).fill(0);
  const arr = new Array(n).fill(0);
  let start = 0;
  let end = n;

  for (let i = 0; i < n; i++) {
    s[i] = [...str.slice(start, end).padStart(n, '0')];
    start = end;
    end += n - (i + 1);
  }

  function check(L) {
    let sum = 0;
    for (let i = L; i >= 0; i--) {
      sum += arr[i];

      if (s[i][L] === '+' && sum <= 0) return;
      if (s[i][L] === '-' && sum >= 0) return;
      if (s[i][L] === '0' && sum !== 0) return;
    }
    return true;
  }

  let answer = '';
  let flag = 0;

  function recursion(L) {
    if (flag) return;
    if (L === n) {
      flag = 1;
      answer = arr.join(' ');
      return;
    }

    for (let i = -10; i <= 10; i++) {
      arr[L] = i;
      if (!check(L)) continue;
      recursion(L + 1);
    }
  }

  recursion(0);
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
