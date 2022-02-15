function sol(input) {
  const K = +input[0];
  const barckets = input[1].split(' ');
  const check = new Array(10).fill(0);
  let max = String(-Infinity);
  let min = String(Infinity);

  function isChecked(L, target, num) {
    if (check[target]) return;
    check[target] = 1;
    dfs(L + 1, target, `${num}${target}`);
    check[target] = 0;
  }

  function dfs(L, prev, num) {
    if (L === K) {
      max = Math.max(max, num);
      min = Math.min(min, num);
      return;
    }

    if (barckets[L] === '<') {
      for (let now = prev + 1; now < 10; now++) {
        isChecked(L, now, num);
      }
    } else {
      for (let now = prev - 1; now > -1; now--) {
        isChecked(L, now, num);
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    check[i] = 1;
    dfs(0, i, `${i}`);
    check[i] = 0;
  }

  return `${max}\n${String(min).padStart(K + 1, '0')}`;
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
