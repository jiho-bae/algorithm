function solution(n, build_frame) {
  const beamColumns = {};
  const column = 0;
  const beam = 1;

  function checkAvailable() {
    let flag = 1;
    for (let [key, target] of Object.entries(beamColumns)) {
      if (!flag) return;
      const [x, y] = key.split('/').map(Number);

      if (target === column) {
        if (
          y === 0 ||
          beamColumns[`${x}/${y - 1}`] === column ||
          beamColumns[`${x - 1}/${y}`] === beam ||
          beamColumns[`${x}/${y}`] === beam
        )
          continue;
        flag = 0;
      } else {
        if (
          beamColumns[`${x}/${y - 1}`] === column ||
          beamColumns[`${x + 1}/${y - 1}`] === column ||
          (beamColumns[`${x - 1}/${y}`] === beam &&
            beamColumns[`${x + 1}/${y}`] === beam)
        )
          continue;
        flag = 0;
      }
    }

    return flag;
  }

  build_frame.forEach(([x, y, target, setup]) => {
    if (setup) {
      beamColumns[`${x}/${y}`] = target;
      if (!checkAvailable()) {
        delete beamColumns[`${x}/${y}`];
      }
    } else {
      delete beamColumns[`${x}/${y}`];
      if (!checkAvailable()) {
        beamColumns[`${x}/${y}`] = target;
      }
    }
  });

  const answer = Object.entries(beamColumns)
    .map(([key, target]) => {
      const [x, y] = key.split('/').map(Number);
      return [x, y, target];
    })
    .sort((a, b) => {
      if (a[0] === b[0] && a[1] === b[1]) return a[2] - b[2];
      else if (a[0] === b[0]) return a[1] - b[1];
      else return a[0] - b[0];
    });

  return answer;
}
