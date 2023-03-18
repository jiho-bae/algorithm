function solution(board) {
  const row = board.length;
  const col = board[0].length;
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  const NON_DIR = -10;
  const movedMap = {};
  const BLOCK = {
    empty: '.',
    start: 'R',
    obstacle: 'D',
    goal: 'G',
  };

  function getStartPos(board) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (board[i][j] === BLOCK.start) return [i, j];
      }
    }
  }

  function endOfBoard(x, y) {
    if (x < 0 || x >= row || y < 0 || y >= col) return true;
    if (board[x][y] === BLOCK.obstacle) return true;
    return false;
  }

  function getReverseDir(dir) {
    return (dir + 2) % 4;
  }

  function checkGoal(x, y) {
    return board[x][y] === BLOCK.goal;
  }

  const startPos = getStartPos(board);
  board[startPos[0]][startPos[1]] = BLOCK.empty;

  function bfs() {
    const arr = [[...startPos, NON_DIR, 0]];
    let idx = 0;

    while (1) {
      if (arr.length - 1 < idx) return;

      const [x, y, dir, cnt] = arr[idx++];
      const movedPath = `${x}/${y}/${dir}`;
      if (movedMap[movedPath]) continue;
      movedMap[movedPath] = true;

      for (let i = 0; i < 4; i++) {
        let [nx, ny] = [x + dx[i], y + dy[i]];

        if (dir !== NON_DIR) {
          if (dir === i) continue;
          if (getReverseDir(dir) === i) continue;
        }
        if (endOfBoard(nx, ny)) continue;

        while (!endOfBoard(nx + dx[i], ny + dy[i])) {
          [nx, ny] = [nx + dx[i], ny + dy[i]];
        }

        if (checkGoal(nx, ny)) return cnt + 1;
        arr.push([nx, ny, i, cnt + 1]);
      }
    }
  }

  return bfs() ?? -1;
}

/**
 * 리코쳇 로봇.
 * 격자모양 게임판 위에서 말을 움직이는 게임.
 * 시작 -> 목표까지 최소 도달수를 구하는 게임.
 * 상하좌우로 움직이며 장애물/맨끝에 부딪힐 때 까지 미끄러지는게 1번의 이동.
 * .은 빈공간, R은 처음 위치, D는 장애물, G는 목표지점.
 * 게임판 행렬 board가 주어졌을 때, 최소 몇번 이동해야하는지 구하기.
 * 목표위치에 도달 불가능하다면 -1 반환
 *
 * 3<=board.length<=100
 * 3<=board element <= 100
 * board element(string)의 크기 동일
 *
 * 이동방법 : 상하좌우
 * 1. 끝까지 미끄러져야 하므로 이동방향이 빈공간(.), 목표지점(G)이라면 계속 이동한다.
 * 2. 더이상 이동할 수 없을 때 현재 위치를 파악한다. G이면 정답이다.
 * 3. 다음 이동을 정할 때 미끄러진 방향과 미끄러진 반대방향을 제외한 2가지 방향중 선택한다.
 * 다시 1번으로 돌아가 이동방향으로 미끄러져 나간다.
 * 최대 미끄러지는 횟수를 정해보자. board가 100x100이므로 1000회정도 설정하자.
 * 1000회까지 목표에 도달하지 못했다면 -1을 리턴하자.
 *
 * bfs로 동작시켜본다. 단 shift를 쓰기보다는 배열에 쌓인 순서대로 가져가자.
 * 계속 이동방향대로 진행할 때는 루프를 돈다. 한칸씩 이동시키자.
 */
