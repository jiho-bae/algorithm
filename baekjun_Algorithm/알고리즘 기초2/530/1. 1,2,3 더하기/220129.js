function sol([n, ...input]) {
  n = +n;
  input = input.map(Number);
  const answer = [];
  let cnt;

  function recursion(sum, target) {
    if (sum === target) {
      cnt++;
      return;
    }
    for (let i = 1; i <= 3; i++) {
      if (sum + i <= target) recursion(sum + i, target);
    }
  }

  input.forEach((num) => {
    cnt = 0;
    for (let i = 1; i <= 3; i++) {
      if (i > num) continue;
      recursion(i, num);
    }
    answer.push(cnt);
  });

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
