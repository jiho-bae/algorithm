// N개 물건. W와 가치 V를 가짐.
// 넣어서 가면 V만큼 즐김.
// K만큼 무게 넣기 가능.
// 최대한 즐거운 여행을 위해 가치있는 물건 넣어보기.

/*
  i번째 물건을 넣는 과정에서,
  K보다 물건 용량이 더 크다? 패스.
  K보다 물건 용량이 더 작다? 이제 판단 시작.
  1. 배낭에서 빼고 현재 물건을 넣는다.
  2. 배낭에서 빼는 가치가 더 커서, 배낭을 그대로 가져간다.

  현재 물건에 대해서, 1~K 용량까지 따져본다.
  다음 물건에 대해서는, 이전 물건에 대한 누적치를 가지고 넣어야 할 무게 다음~K 용량을 따져본다.
  물건 중 A 무게가 없어도, [n][A]의 위치에는 0이 들어가 있으니, 상관이 없다.
  결국 i=N, j=M까지 NM회 순회하므로 [N][M]위치에 가장 큰 가치가 담긴다.
*/

function sol(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const goods = input.slice(1).map((str) => str.split(' ').map(Number));
  const maps = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const [w, v] = goods[i - 1];

    for (let j = 1; j <= K; j++) {
      if (j < w) maps[i][j] = maps[i - 1][j];
      else maps[i][j] = Math.max(maps[i - 1][j], maps[i - 1][j - w] + v);
    }
  }

  return maps[N][K];
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
