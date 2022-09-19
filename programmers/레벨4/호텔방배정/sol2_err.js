/*
  findLastIdx 함수로  next 키를 계속 업데이트하면서 진행해본다.
  다 되는데,, 효율성 7번이 에러.
  객체를 써서 그런가... Map을 써보자.
*/

function solution(k, room_number) {
  const len = room_number.length;
  const answer = new Array(len);
  const assignRooms = {};

  function nextIdx(next) {
    assignRooms[next] = assignRooms[next]
      ? nextIdx(assignRooms[next])
      : next + 1;

    return assignRooms[next];
  }

  for (let i = 0; i < len; i++) {
    answer[i] = nextIdx(room_number[i]) - 1;
  }

  return answer;
}
