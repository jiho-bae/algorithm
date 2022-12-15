function sol(input) {
  let [N, B] = input[0].split(' ').map(Number);
  const A = input.slice(1).map((str) => str.split(' ').map(Number));
  const answer = Array.from({ length: N }, () => new Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    answer[i][i] = 1;
  }

  function multiplyMatrix(X, Y) {
    const tmp = Array.from({ length: N }, () => new Array(N).fill(0));

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
          tmp[i][j] += X[i][k] * Y[k][j];
        }
        tmp[i][j] %= 1000;
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        X[i][j] = tmp[i][j];
      }
    }
  }

  while (B) {
    if (B % 2 === 1) {
      multiplyMatrix(answer, A);
      B -= 1;
    }
    multiplyMatrix(A, A);
    B /= 2;
  }

  function printAnswer(X) {
    let result = '';
    for (let i = 0; i < N; i++) {
      result += X[i].join(' ') + '\n';
    }

    return result;
  }

  return printAnswer(answer);
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
 * 크기가 N*N인 행렬 A
 * A의 B제곱 구하기.(A^B의 각 원소를 1000으로 나눈 나머지 출력.)
 *
 * 2<=N<=5, 1<=B<=1000억.
 * 둘째줄부터 N개의 줄에 행렬 각 원소 주어짐.
 *
 *
 * B가 최대 1000억이다. 알고리즘은 O(N)이하여야함.
 * A*A*A*A*A*A*A.... 의 패턴....?
 * 행렬은 결합,분배법칙이 성립함..
 * A^4 = A^2 * A^2가 될 수 있음.
 * A^4가 4번제곱하는 것이 아니라 A^2를 구한뒤에 A^2 * A^2 해주면 됨.
 * A^10000 는 A^5000 A^5000 ..이니까.. logN단위로 줄어드나.
 * 그렇다면.. B가 짝수라면 B/=2씩 하면서 A의 제곱승을 구하고, B가 홀수라면 A^짝수승 * A이므로..
 * 처음 A값을 기억해두고 A^짝수승은 그대로 B/=2로 구하면 될듯..?
 */
