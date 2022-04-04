function sol(input) {
  let [A, B, C, X, Y] = input.split(' ').map(Number);
  if (A + B < C * 2) {
    return A * X + B * Y;
  }
  if (A > C * 2 && B > C * 2) {
    return 2 * C * Math.max(X, Y);
  }

  const numberOfHalfChickens = Math.min(X, Y);
  X -= numberOfHalfChickens;
  Y -= numberOfHalfChickens;

  return (
    numberOfHalfChickens * (C * 2) +
    X * Math.min(A, C * 2) +
    Y * Math.min(B, C * 2)
  );
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
