function sol(input) {
  let arr = input[0].split('');
  let length = arr.length;
  let idx = length;

  function work(cmd) {
    switch (cmd) {
      case 'L':
        idx && idx--;
        return;
      case 'D':
        idx < length && idx++;
        return;
      case 'B':
        idx && idx-- && arr.splice(idx, 1) && length--;
        return;
      default:
        const [_, char] = cmd.split(' ');
        arr.splice(idx, 0, char);
        idx++;
        length++;
        return;
    }
  }

  input.slice(2).forEach((cmd) => work(cmd));
  return arr.join('');
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
