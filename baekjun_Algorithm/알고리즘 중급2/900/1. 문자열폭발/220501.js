function sol(input) {
  let [str, bombStr] = input;
  const bLen = bombStr.length;
  const stack = [];

  for (let i = 0, strLen = str.length; i < strLen; i++) {
    stack.push(str[i]);
    if (stack.length >= bLen) {
      const stackStr = stack.slice(stack.length - bLen, stack.length).join('');
      if (stackStr === bombStr) {
        for (let i = 0; i < bLen; i++) {
          stack.pop();
        }
      }
    }
  }

  return stack.length ? stack.join('') : 'FRULA';
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
