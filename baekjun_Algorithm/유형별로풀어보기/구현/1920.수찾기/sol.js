// 처음 주어진 배열을 순회하면서 테이블에 매핑시켜두고
// 매핑된 테이블 기반으로 두번째 주어진 배열을 순회하면
// O(N+M) 이면 끝.

function sol(input) {
  const N = input[0];
  const M = input[2];
  const arr = strToArr(input[1]);
  const target = strToArr(input[3]);
  const mappingTable = {};
  const answer = new Array(M).fill(0);

  for (let i = 0; i < N; i++) {
    mappingTable[arr[i]] = 1;
  }

  for (let i = 0; i < M; i++) {
    answer[i] = mappingTable[target[i]] || 0;
  }

  return answer.join('\n');
}

function strToArr(str, sep = ' ') {
  return str.split(sep).map(Number);
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
