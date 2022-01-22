function findValue(eq1, eq2) {
  let [a, b, e] = [...eq1];
  let [c, d, f] = [...eq2];
  let x, y;

  const determine = a * d - b * c;
  if (determine === 0) return;
  x = (b * f - e * d) / (a * d - b * c);
  y = (e * c - a * f) / (a * d - b * c);
  if (x % 1 || y % 1) return;
  if (x === -0) x = 0;
  if (y === -0) y = 0;
  return [x, y];
}

function solution(line) {
  const answer = [];
  const len = line.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const sol = findValue(line[i], line[j]);
      if (sol) answer.push(sol);
    }
  }

  let left = Number.MAX_SAFE_INTEGER;
  let top = Number.MIN_SAFE_INTEGER;
  let right = Number.MIN_SAFE_INTEGER;
  let bottom = Number.MAX_SAFE_INTEGER;
  answer.forEach(([x, y]) => {
    left = Math.min(left, x);
    top = Math.max(top, x);
    right = Math.max(right, y);
    bottom = Math.min(bottom, y);
  });

  const plusX = Math.abs(left);
  const plusY = Math.abs(bottom);
  answer.forEach(([x, y], idx) => (answer[idx] = [x + plusX, y + plusY]));

  const arr = Array.from({ length: top + plusY + 1 }, () =>
    new Array(right + plusX + 1).fill('.')
  );
  console.log(arr);
}
