function findValue(eq1, eq2) {
  let teq1 = [...eq1];
  let teq2 = [...eq2];
  let x, y;

  if (eq1[0] === 0 && eq2[0] === 0) {
    if (eq1[2] % eq1[1]) return false;
    y = eq1[2] / eq1[1];
    if (y !== eq2[2] / eq2[1]) return false;
    return [0, -y];
  }

  if (eq1[1] === 0 && eq2[1] === 0) {
    if (eq1[2] % eq1[0]) return false;
    x = eq1[2] / eq1[0];
    if (x !== eq2[2] / eq2[0]) return false;
    return [-x, 0];
  }

  for (let i = 0; i < 3; i++) {
    teq1[i] *= eq2[0];
    teq2[i] *= eq1[0];
  }
  if (eq1[0] === 0) {
    y = -(eq1[2] / eq1[1]);
    x = -(eq2[2] + eq2[1] * y) / eq2[0];
  } else {
    y = -(teq2[2] - teq1[2]) / (teq2[1] - teq1[1]);
    x = -(eq1[2] + eq1[1] * y) / eq1[0];
  }
  if (x % 1 || y % 1) return false;
  if (x === -0) return [x, y];
}

function solution(line) {
  const answer = [];
  const len = line.length;
  line.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const sol = findValue(line[i], line[j]);
      if (sol) answer.push(sol);
    }
  }

  answer.forEach(([x, y], idx) => {
    if (x < 0) answer[idx] = [-2 * x, y];
    if (y < 0) answer[idx] = [x, -2 * y];
  });
  console.log(answer);
}
