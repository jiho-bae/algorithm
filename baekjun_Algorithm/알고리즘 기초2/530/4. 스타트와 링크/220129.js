function sol([n, ...input]) {
  n = +n;
  const halfN = n / 2;
  const maps = input.map((str) => str.split(' ').map(Number));
  let min = Number.MAX_SAFE_INTEGER;

  function recursion(L, prev, arr) {
    if (L === halfN) {
      const link = Array.from({ length: n }, (_, i) => i).filter(
        (elem) => !arr.includes(elem)
      );
      let sumStart = 0;
      let sumLink = 0;
      for (let i = 0; i < halfN - 1; i++) {
        for (let j = i + 1; j < halfN; j++) {
          const [sTo, sFrom] = [arr[i], arr[j]];
          const [lTo, lFrom] = [link[i], link[j]];
          sumStart += maps[sTo][sFrom] + maps[sFrom][sTo];
          sumLink += maps[lTo][lFrom] + maps[lFrom][lTo];
        }
      }

      min = Math.min(min, Math.abs(sumLink - sumStart));
      return;
    }

    for (let i = prev + 1; i < n; i++) {
      recursion(L + 1, i, [...arr, i]);
    }
  }

  recursion(0, -1, []);

  return min;
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
