function sol(line) {
  let [N, M, K] = line.split(' ').map(Number);

  let group = Math.min(Math.floor(N / 2), M);

  const restGirl = N - 2 * group;
  const restBoy = M - group;

  K -= restBoy + restGirl;
  if (K <= 0) return group;
  while (K > 0) {
    group--;
    K -= 3;
  }
  return group;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
