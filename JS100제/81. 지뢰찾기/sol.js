/*
지뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. **깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램**을 만드세요.

- 아래 Case 외 예외 사항은 고려하지 않습니다.
(예를 들어 깃발이 붙어 있을 경우는 고려하지 않습니다.) 
실력이 되시는 분들은 깃발이 붙어있을 상황까지 고려해 주세요.
*/

function sol(mine) {
  const rowSize = mine.length;
  const columnSize = mine[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let x = 0; x < rowSize; x++) {
    for (let y = 0; y < columnSize; y++) {
      if (mine[x][y] === 1) {
        mine[x][y] = "f";
        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < rowSize &&
            ny < columnSize &&
            mine[nx][ny] === 0
          )
            mine[nx][ny] = "*";
        }
      }
    }
  }
  return mine;
}

let mine = [
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

sol(mine);
