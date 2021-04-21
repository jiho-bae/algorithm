function solution(dirs) {
  let movedPos = [];
  let dist = [0, 0];

  const dx = { U: 0, R: 1, D: 0, L: -1 };
  const dy = { U: 1, R: 0, D: -1, L: 0 };
  for (let dir of dirs) {
    if (
      dist[0] + dx[dir] > 5 ||
      dist[0] + dx[dir] < -5 ||
      dist[1] + dy[dir] > 5 ||
      dist[1] + dy[dir] < -5
    )
      continue;
    let moveXY = [dist[0] + dx[dir], dist[1] + dy[dir]];

    const move1 = [...dist, ...moveXY].join("");
    const move2 = [...moveXY, ...dist].join("");
    if (!movedPos.includes(move1) && !movedPos.includes(move2)) {
      movedPos.push(move1);
    }
    dist = moveXY;
  }
  console.log(movedPos);
  return movedPos.length;
}
