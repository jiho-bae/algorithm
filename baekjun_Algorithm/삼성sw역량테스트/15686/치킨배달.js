function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const house = [];
  const chicken = [];
  input.slice(1).forEach((row, rowIdx) => {
    row.split(' ').forEach((col, colIdx) => {
      if (col === '2') chicken.push([rowIdx, colIdx]);
      else if (col === '1') house.push([rowIdx, colIdx]);
    });
  });
  const houseSize = house.length;
  const chickenSize = chicken.length;

  function combination(L, idx, comb, cnt) {
    if (L === cnt) {
      arr.push(comb);
      return;
    }

    for (let i = idx; i < chickenSize; i++) {
      combination(L + 1, i + 1, [...comb, chicken[i]], cnt);
    }
  }

  let arr;
  let sum;
  let minSum = Number.MAX_SAFE_INTEGER;
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= M; i++) {
    arr = [];
    combination(0, 0, [], i);
    const arrSize = arr.length;

    for (let i = 0; i < arrSize; i++) {
      const elem = arr[i];
      const elemSize = elem.length;
      sum = 0;

      for (let j = 0; j < houseSize; j++) {
        let min = Number.MAX_SAFE_INTEGER;

        for (let k = 0; k < elemSize; k++) {
          min = Math.min(
            min,
            Math.abs(elem[k][0] - house[j][0]) +
              Math.abs(elem[k][1] - house[j][1])
          );
        }
        sum += min;
      }
      minSum = Math.min(minSum, sum);
    }
    answer = Math.min(answer, minSum);
  }

  return answer;
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
