function sol(input) {
  const str = input;
  let answer = '';
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '<') {
      answer += stack.reverse().join('');
      stack = [];
      while (str[i] !== '>') stack.push(str[i++]);
      stack.push(str[i]);
      answer += stack.join('');
      stack = [];
    } else if (str[i] === ' ') {
      answer += stack.reverse().join('') + ' ';
      stack = [];
    } else {
      stack.push(str[i]);
    }
  }
  answer += stack.reverse().join('');
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
