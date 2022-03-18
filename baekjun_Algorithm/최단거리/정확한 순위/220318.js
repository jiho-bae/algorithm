function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const adjM = Array.from({ length: N }, () => new Array(N).fill(Infinity));

  for (let i = 0; i < N; i++) {
    adjM[i][i] = 0;
  }

  input.slice(1).forEach((inp) => {
    const [from, to] = inp.split(' ').map(Number);
    adjM[from - 1][to - 1] = 1;
  });

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        adjM[i][j] = Math.min(adjM[i][j], adjM[i][k] + adjM[k][j]);
      }
    }
  }

  let answer = 0;

  for (let i = 0; i < N; i++) {
    let cnt = 0;
    for (let j = 0; j < N; j++) {
      if (adjM[i][j] !== Infinity || adjM[j][i] !== Infinity) {
        cnt += 1;
      }
    }

    if (cnt === N) answer++;
  }

  return answer;
}

const input = ['6 6', '1 5', '3 4', '4 2', '4 6', '5 2', '5 4'];
sol(input);
