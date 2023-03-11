function solution(keymap, targets) {
  var answer = [];
  const keyPos = {};

  keymap.forEach((km) => {
    [...km].forEach((alphabet, pos) => {
      const curPos = keyPos[alphabet] ?? pos + 1;
      keyPos[alphabet] = Math.min(curPos, pos + 1);
    });
  });

  targets.forEach((target) => {
    let click = 0;

    for (let alphabet of target) {
      const curPos = keyPos[alphabet] ?? -1;
      if (curPos === -1) {
        click = -1;
        break;
      }
      click += curPos;
    }

    answer.push(click);
  });

  return answer;
}
