function sol(line) {
  const stack = [];
  const firstPriority = ['*', '/'];
  const secondPriority = ['+', '-'];
  let answer = '';

  for (let oper of line) {
    if (/[A-Z]/.test(oper)) {
      answer += oper;
      continue;
    }

    if (oper === '(') {
      stack.push(oper);
      continue;
    }

    if (oper === ')') {
      while (stack.length) {
        const popOper = stack.pop();
        if (popOper === '(') break;
        answer += popOper;
      }
      continue;
    }

    if (firstPriority.includes(oper)) {
      while (stack.length && firstPriority.includes(stack[stack.length - 1])) {
        answer += stack.pop();
      }
      stack.push(oper);
      continue;
    }

    if (secondPriority.includes(oper)) {
      while (stack.length) {
        const popOper = stack.pop();
        if (popOper === '(') {
          stack.push(popOper);
          break;
        }
        answer += popOper;
      }
      stack.push(oper);
      continue;
    }
  }

  while (stack.length) {
    answer += stack.pop();
  }

  return answer;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
