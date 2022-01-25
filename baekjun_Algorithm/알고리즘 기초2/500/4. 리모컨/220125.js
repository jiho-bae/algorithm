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

function sol([n, ...input]) {
  if (input[0] === '0') {
    return Math.min(n.length, Math.abs(n - 100));
  }

  const max = 1000000;
  const keys = Array.from({ length: 10 }, () => true);
  input[1].split(' ').forEach((key) => (keys[key] = false));
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= max; i++) {
    const num = String(i);
    const length = num.length;
    let flag = 1;

    for (let j = 0; j < length; j++) {
      if (!keys[num[j]]) {
        flag = 0;
        break;
      }
    }

    if (flag) {
      answer = Math.min(answer, Math.abs(n - i) + length);
    }
  }

  answer = Math.min(answer, Math.abs(n - 100));
  return answer;
}
