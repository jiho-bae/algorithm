function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function sol([t, ...input]) {
  const answer = [];

  input.forEach((str) => {
    const [n, ...arr] = str.split(' ').map(Number);
    let sum = 0;
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        sum += gcd(arr[i], arr[j]);
      }
    }
    answer.push(sum);
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
