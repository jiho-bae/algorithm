function validPs(ps) {
  const stack = [];
  let vps = 1;

  for (let str of [...ps]) {
    if (str === '(') stack.push(str);
    else if (stack[stack.length - 1] === '(') stack.pop();
    else {
      vps = 0;
      break;
    }
  }
  return vps && !stack.length ? 'YES' : 'NO';
}

function sol(input) {
  return input
    .slice(1)
    .map((ps) => validPs(ps))
    .join('\n');
}

let input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
