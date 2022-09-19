/*
  2번과 동일하나 Map을 쓰니 성공.
*/

function solution(k, room_number) {
  const len = room_number.length;
  const answer = new Array(len);
  const assignRooms = new Map();

  function nextIdx(next) {
    assignRooms.set(
      next,
      assignRooms.has(next) ? nextIdx(assignRooms.get(next)) : next + 1
    );

    return assignRooms.get(next);
  }

  for (let i = 0; i < len; i++) {
    answer[i] = nextIdx(room_number[i]) - 1;
  }

  return answer;
}
