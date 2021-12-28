function sol(input) {
  const arr = input.map(Number);
  const n = arr[0];
  let number = 1;
  let flag = 0;
  const stack = [];
  const answer = [];

  function trackTarget(target) {
    while (n >= number) {
      if (target === stack[stack.length - 1]) {
        stack.pop();
        answer.push('-');
        return;
      }
      stack.push(number++);
      answer.push('+');
    }
    if (target === stack[stack.length - 1]) {
      stack.pop();
      answer.push('-');
    } else {
      flag = 1;
      return;
    }
  }
  arr.slice(1).forEach((target) => trackTarget(target));
  return flag ? 'NO' : answer.join('\n');
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
