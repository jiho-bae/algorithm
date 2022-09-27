function sol(input) {
  const [A, B] = input[0].split(' ').map(Number);
  const [C, D] = input[1].split(' ').map(Number);

  let yt = eratosThenes(A, B);
  let yj = eratosThenes(C, D);
  const ytPrimes = {};
  let intersection = 0;

  yt.forEach((prime) => (ytPrimes[prime] = 1));
  yj.forEach((prime) => {
    if (ytPrimes[prime]) intersection++;
  });

  const cnt = { yt: yt.length, yj: yj.length };

  while (cnt.yt > 0 && cnt.yj > 0) {
    if (intersection >= 2) {
      intersection -= 2;
      cnt.yt -= 2;
      cnt.yj -= 2;
    } else if (intersection >= 1) {
      intersection--;
      cnt.yt -= 1;
      cnt.yj -= 2;
    } else {
      cnt.yt -= 1;
      cnt.yj -= 1;
    }
  }

  return cnt.yt > cnt.yj ? 'yt' : 'yj';
}

function eratosThenes(start, end) {
  const arr = Array.from({ length: 1001 }, (_, i) => i);
  const sqrt = Math.floor(arr.length);
  arr[1] = 0;

  for (let i = 2; i <= sqrt; i++) {
    if (arr[i] === 0) continue;

    for (let j = 2 * i; j <= 1000; j += i) {
      arr[j] = 0;
    }
  }

  return arr.slice(start, end + 1).filter((elem) => elem);
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
