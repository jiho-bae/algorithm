// 메모리초과 (카운팅소트슬 사용하는게 맞으나 백준 내 nodejs 성능 부족)

function sol(input) {
  const N = +input[0];
  const countingSort = new Array(10001).fill(0);

  for (let i = 1; i <= N; i++) {
    const next = +input[i];
    countingSort[next]++;
  }

  let answer = '';

  for (let i = 1; i <= 10000; i++) {
    if (countingSort[i]) {
      answer += `${i}\n`.repeat(countingSort[i]);
    }
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
