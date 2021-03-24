function solution(board, moves) {
  let pickArr = [];
  let answer = 0;

  moves.forEach((move) => {
    move--;

    for (let i = 0; i < board.length; i++) {
      if (board[i][move]) {
        const pickNum = board[i][move];
        board[i][move] = 0;

        if (pickArr[pickArr.length - 1] === pickNum) {
          pickArr.pop();
          answer += 2;
          break;
        }
        pickArr.push(pickNum);
        break;
      }
    }
  });

  return answer;
}
