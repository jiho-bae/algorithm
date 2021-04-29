/*
N x M으로 이루어진 아래와 같은 공간에 퍼즐이 쌓여져 있습니다.
 
퍼즐을 맞추기 위해서는 반드시 맨 오른쪽 줄로 이동시켜 줘야 합니다.
만약 종류가 같은 퍼즐이 연속될 시에 점수가 추가되며 그 퍼즐은 사라집니다.

점수는 다음과 같습니다.
- 파란색 공 : 1점
- 빨간색 공 : 2점
- 노란색 공 : 3점
- 초록색 공 : 4점
- 주황색 공 : 5점
점수는 공의 개수만큼 추가됩니다
예를 들어 빨간색 공이 2개 연속되어 없어졌을 경우 2*2 = 4점입니다.

게임 플레이어는 게임이 시작되면 어떤 퍼즐을 이동할 것인지 모두 작성합니다.
만약 비어있는 곳을 선택하게 된다면 점수가 1점 감소하며 그대로 진행합니다.
위 규칙에 맞는 점수를 리턴하는 함수를 작성하세요.

예를 들어 입력이 "1 1 1 1 3 3 3"일 경우,
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7487d3c5-ad1d-466e-b932-df338b013f89/1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7487d3c5-ad1d-466e-b932-df338b013f89/1.png)
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d58aa687-70cc-48d0-8189-cd6664be74f7/2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d58aa687-70cc-48d0-8189-cd6664be74f7/2.png)
총 점수는 2점으로 2를 출력해야 합니다.
*/

function sol(puzzle, move) {
  let n = puzzle[0].length;
  let m = puzzle.length;
  let stack = [];
  let score = 0;

  for (let col of move) {
    let flag = 1;
    col -= 1;
    for (let row = 0; row < m; row++) {
      if (puzzle[row][col] !== 0) {
        let pick = puzzle[row][col];
        puzzle[row][col] = 1;
        if (stack[stack.length - 1] === pick) {
          stack.pop();
          score = score + pick * pick;
        } else {
          stack.push(pick);
        }
        flag = 0;
        break;
      }
    }
    if (flag) score--;
  }
  return score;
}

let puzzle = [
  [0, 0, 0, 0],
  [0, 1, 0, 3],
  [2, 5, 0, 1],
  [2, 4, 4, 1],
  [5, 1, 1, 1],
];
let move = [1, 1, 1, 1, 3, 3, 3];

console.log(sol(puzzle, move));

let move2 = [1, 1, 3, 2, 3, 4, 2, 1, 3];
console.log(sol(puzzle, move2));
