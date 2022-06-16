function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const maps = input.slice(1).map((row) => row.split(' ').map(Number));
  const virus = [];
  let wall = 0;
  let virusPos;
  let answer = Number.MAX_SAFE_INTEGER;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (maps[i][j] === 2) {
        virus.push([i, j]);
      } else if (maps[i][j] === 1) {
        wall += 1;
        maps[i][j] = '-';
      }
    }
  }

  const virusLength = virus.length;
  const combs = [];
  const exclusionCombs = [];

  function combination(L, idx, comb) {
    if (L === M) {
      combs.push(comb);
      exclusionCombs.push(
        Array.from({ length: M }, (_, i) => i + 1)
          .filter((idx) => !combs.includes(idx))
          .map((idx) => virus[idx])
      );
      return;
    }

    for (let i = idx; i < virusLength; i++) {
      combination(L + 1, i + 1, [...comb, virus[i]]);
    }
  }

  combination(0, 0, []);

  function isMovable(x, y) {
    if (x < 0 || y < 0 || x >= N || y >= N) return false;
    return true;
  }

  for (let i = 0; i < combs.length; i++) {
    const comb = combs[i];
    const exclusionComb = exclusionCombs[i];

    let time = 0;
    const combKeys = comb.map(([x, y]) => `${x}/${y}`);
    const exclusionCombKeys = exclusionComb.map(([x, y]) => `${x}/${y}`);

    const isolateKey = new Set();
    const infectionSize = N * N - wall;
    virusPos = new Set(combKeys);
    const exclusionVirusPos = new Set(exclusionCombKeys);

    while (virusPos.size !== infectionSize) {
      const nextVirus = [];

      for (let pos of virusPos) {
        if (isolateKey.has(pos)) continue;
        const [x, y] = pos.split('/').map(Number);

        let cntNextStep = 0;
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (!isMovable(nx, ny)) continue;
          if (virusPos.has(`${nx}/${ny}`)) continue;
          if (maps[nx][ny] !== '-') {
            if (exclusionVirusPos.has(`${nx}/${ny}`)) {
              exclusionVirusPos.delete(`${nx}/${ny}`);
            }
            nextVirus.push(`${nx}/${ny}`);
            cntNextStep += 1;
          }
        }

        if (cntNextStep === 0) isolateKey.add(pos);
      }

      if (nextVirus.length === 0) break;

      virusPos = new Set([...virusPos, ...nextVirus]);
      time += 1;
    }

    if (virusPos.size !== infectionSize + exclusionVirusPos.size) {
      continue;
    }

    answer = Math.min(answer, time);
  }

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
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

sol([
  '7 2',
  '2 0 2 0 1 1 0',
  '0 0 1 0 1 0 0',
  '0 1 1 1 1 0 0',
  '2 1 0 0 0 0 2',
  '1 0 0 0 0 1 1',
  '0 1 0 0 0 0 0',
  '2 1 0 0 2 0 2',
]);

sol([
  '7 3',
  '2 0 0 0 1 1 0',
  '0 0 1 0 1 2 0',
  '0 1 1 0 1 0 0',
  '0 1 0 0 0 0 0',
  '0 0 0 2 0 1 1',
  '0 1 0 0 0 0 0',
  '2 1 0 0 0 0 2',
]);

sol([
  '7 5',
  '2 0 2 0 1 1 0',
  '0 0 1 0 1 2 0',
  '0 1 1 2 1 0 0',
  '2 1 0 0 0 0 2',
  '0 0 0 2 0 1 1',
  '0 1 0 0 0 0 0',
  '2 1 0 0 2 0 2',
]);

sol([
  '7 3',
  '2 0 2 0 1 1 0',
  '0 0 1 0 1 0 0',
  '0 1 1 1 1 0 0',
  '2 1 0 0 0 0 2',
  '1 0 0 0 0 1 1',
  '0 1 0 0 0 0 0',
  '2 1 0 0 2 0 2',
]);
