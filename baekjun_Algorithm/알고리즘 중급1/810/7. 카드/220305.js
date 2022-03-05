// BigInt

function sol(input) {
  const N = +input[0];
  const obj = {};
  let maxNum = BigInt(2 ** 63);
  let max = Number.MIN_SAFE_INTEGER;
  const arr = input.slice(1).map((elem) => BigInt(elem));

  for (let i = 0; i < N; i++) {
    const next = arr[i];
    obj[next] = obj[next] ? obj[next] + 1 : 1;

    if (obj[next] === max && maxNum > next) {
      maxNum = next;
    } else if (obj[next] > max) {
      maxNum = next;
      max = obj[next];
    }
  }

  return String(maxNum);
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
