function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const bytes = [0, ...input[1].split(' ').map(Number)];
  const costs = [0, ...input[2].split(' ').map(Number)];
  const dp = Array.from({ length: 101 }, () => new Array(100 * 100 + 1).fill(0));
  const sum = costs.reduce((acc, val) => acc + val, 0);

  for (let i = 1; i <= 100; i++) {
    for (let j = 0; j <= sum; j++) {
      if (j - costs[i] >= 0) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - costs[i]] + bytes[i]);
      }
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
    }
  }

  return dp[N].findIndex((el) => el >= M);
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

/**
 * 앱 - 활성화.
 * 화면에 보이지 않아도 메모리에 남겨서 빠르게 실행준비 가능.
 * 제한적 메모리로 모든 앱을 메모리에 남길 순 없음.
 * 비활성화 - 메모리에서 몇 앱을 삭제하는 작업
 * 무작위의 비활성화는 좋은 방법이 아님.
 * 비활성화를 스마트하게 해결할 프로그램을 만들어보자.
 *
 * N개의 앱 A1~An.
 * Ax의 메모리 Mx바이트. 해제할 때 비용 Cx
 * 1<=N<=100, 0<=c1~cn<=100.
 * 필요한 메모리 M바이트 확보를 위해 필요한 최소비용 C를 출력.
 *
 * */
