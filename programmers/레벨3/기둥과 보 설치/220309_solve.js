// 오류원인 : x,y 같은 좌표에 칼럼, 보가 같이 설치될 수도 있음...
// 현재는 x,y 좌표를 덮어쓰는 방식이었음.

function solution(n, build_frame) {
  const beamColumns = {};
  const column = 0;
  const beam = 1;

  function checkAvailable() {
    let flag = 1;
    for (let key of Object.keys(beamColumns)) {
      if (!flag) return;
      const [x, y, target] = key.split('/').map(Number);

      if (target === column) {
        if (
          y === 0 ||
          beamColumns[`${x}/${y - 1}/${column}`] ||
          beamColumns[`${x - 1}/${y}/${beam}`] ||
          beamColumns[`${x}/${y}/${beam}`]
        )
          continue;
        flag = 0;
      } else {
        if (
          beamColumns[`${x}/${y - 1}/${column}`] ||
          beamColumns[`${x + 1}/${y - 1}/${column}`] ||
          (beamColumns[`${x - 1}/${y}/${beam}`] &&
            beamColumns[`${x + 1}/${y}/${beam}`])
        )
          continue;
        flag = 0;
      }
    }

    return flag;
  }

  build_frame.forEach(([x, y, target, setup]) => {
    if (setup) {
      beamColumns[`${x}/${y}/${target}`] = 1;
      if (!checkAvailable()) {
        delete beamColumns[`${x}/${y}/${target}`];
      }
    } else {
      delete beamColumns[`${x}/${y}/${target}`];
      if (!checkAvailable()) {
        beamColumns[`${x}/${y}/${target}`] = 1;
      }
    }
  });

  const answer = Object.keys(beamColumns)
    .map((key) => key.split('/').map(Number))
    .sort((a, b) => {
      if (a[0] === b[0] && a[1] === b[1]) return a[2] - b[2];
      else if (a[0] === b[0]) return a[1] - b[1];
      else return a[0] - b[0];
    });

  return answer;
}
