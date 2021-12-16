function solution(places) {
  const w = 5;
  const h = 5;

  function checkDistance(x, y, place) {
    const [dx1, dy1] = [
      [-1, 0, 1, 0],
      [0, 1, 0, -1],
    ];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx1[i];
      const ny = y + dy1[i];
      if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
      if (place[nx][ny] === 'P') return 0;
    }

    const [dx2, dy2] = [dx1.map((v) => 2 * v), dy1.map((v) => 2 * v)];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx2[i];
      const ny = y + dy2[i];
      if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
      if (place[nx][ny] === 'P' && place[x + dx1[i]][y + dy1[i]] !== 'X')
        return 0;
    }

    const [dx3, dy3] = [
      [-1, 1, 1, -1],
      [1, 1, -1, -1],
    ];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx3[i];
      const ny = y + dy3[i];
      const nIdx = (i + 1) % 4;
      if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
      if (
        place[nx][ny] === 'P' &&
        (place[x + dx1[i]][y + dy1[i]] !== 'X' ||
          place[x + dx1[nIdx]][y + dy1[nIdx]] !== 'X')
      )
        return 0;
    }
    return 1;
  }

  return places.map((place) => {
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        if (place[i][j] === 'P') {
          if (!checkDistance(i, j, place)) return 0;
        }
      }
    }
    return 1;
  });
}

module.exports = solution;
