/*
수연이는 밭농사를 시작하기로 마음을 먹었다. 집 앞 텃밭을 만들기로 하고 돌들을 제거하고 있는데 매우 큰 바위는 옮기지 못해 고심하고 있다.

이에 수연이는 다음과 같은 규칙을 정한다.

1. 바위를(바위는 '1'로 표기한다.) 피해 텃밭을 만들되 정사각형 모양으로 텃밭을 만든다.
2. 텃밭은 가장 넓은 텃밭 1개만 만들고 그 크기를 반환한다.
3. 만든 텃밭은 모두 '#'으로 처리한다.
*/
function solution(field) {
  const row = field.length;
  const col = field[0].length;

  let newField = Array.from(new Array(row), () => new Array(col).fill(0));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (field[i][j] == 0) {
        newField[i][j] = 1;
      } else {
        newField[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (newField[i][j] == 1) {
        let min;
        if (newField[i - 1][j] > newField[i][j - 1]) {
          min = newField[i][j - 1];
        } else if (newField[i - 1][j - 1] > newField[i - 1][j]) {
          min = newField[i - 1][j];
        } else {
          min = newField[i - 1][j - 1];
        }
        newField[i][j] = min + 1;
      }
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  let xy;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (max < newField[i][j]) {
        max = newField[i][j];
        xy = [i, j];
      }
    }
  }

  for (let i = xy[0] - (max - 1); i <= xy[0]; i++) {
    for (let j = xy[1] - (max - 1); j <= xy[1]; j++) {
      field[i][j] = "#";
    }
  }
  return field;
}

const field = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
];
solution(field);
