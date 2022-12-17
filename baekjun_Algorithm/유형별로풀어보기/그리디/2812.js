function sol(input) {
  let [N, K] = input[0].split(' ').map(Number);
  const nums = [...input[1]];
  const stack = [nums[0]];

  for (let num of nums.slice(1)) {
    while (K > 0 && stack.length > 0 && num > stack[stack.length - 1]) {
      stack.pop();
      K -= 1;
    }
    stack.push(num);
  }

  while (K) {
    stack.pop();
    K--;
  }

  return stack.join('');
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
