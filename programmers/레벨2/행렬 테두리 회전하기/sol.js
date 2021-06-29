function solution(rows, columns, queries) {
  const map = Array.from({ length: rows }, (_, i) => {
    return Array.from({ length: columns }, (__, j) => i * columns + j + 1);
  });
  const answer = [];

  queries.forEach(([sx, sy, tx, ty]) => {
    [sx, sy, tx, ty] = [sx - 1, sy - 1, tx - 1, ty - 1];
    let x = sx,
      y = sy;
    let tmp = map[x][y];
    let min = Number.MAX_SAFE_INTEGER;
    while (true) {
      min = min > tmp ? tmp : min;
      if (x === sx && y < ty) {
        [map[x][y + 1], tmp] = [tmp, map[x][y + 1]];
        y++;
      } else if (y === ty && x < tx) {
        [map[x + 1][y], tmp] = [tmp, map[x + 1][y]];
        x++;
      } else if (x === tx && y > sy) {
        [map[x][y - 1], tmp] = [tmp, map[x][y - 1]];
        y--;
      } else if (y === sy && x > sx) {
        [map[x - 1][y], tmp] = [tmp, map[x - 1][y]];
        x--;
        if (y === sy && x === sx) break;
      }
    }
    answer.push(min);
  });
  return answer;
}
