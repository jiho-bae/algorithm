function solution(dirs) {
  const pathObj = {};
  const dirObj = {
    L: [-1, 0],
    R: [1, 0],
    D: [0, -1],
    U: [0, 1],
  };

  const pos = [0, 0];
  let distance = 0;

  [...dirs].forEach((dir) => {
    const [x, y] = pos;
    const [dx, dy] = dirObj[dir];
    if (x + dx < -5 || x + dx > 5 || y + dy < -5 || y + dy > 5) return;
    pos[0] += dx;
    pos[1] += dy;

    const dirStr = `${x}${y}/${x + dx}${y + dy}`;
    const dirStr2 = `${x + dx}${y + dy}/${x}${y}`;
    if (pathObj[dirStr] || pathObj[dirStr2]) return;
    pathObj[dirStr] = 1;
    distance++;
  });

  return distance;
}
