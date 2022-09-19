/*
    스노우타운에서 호텔.
    방 총 k개, 1~k번까지 번호로 구분.
    처음엔 모든방이 비어있따.

    1. 한번에 한명씩 신청한 순서대로 방 배정
    2. 고객이 투숙하기 원하는 방 번호 제출
    3. 고객이 원하는 방이 비어있음 -> 바로 배정
    4. 고객이 원하는 방이 이미 배정 -> 원하는 방보다 번호가 크면서 최소로 큰 빈 방 배정

    1 <= k <= 10^12
    1 <= room_num.length <= 20만
    1 <= room_num <= k

    문제는 k가 10^12 이하다.
    배열로는 택도 없다. 
    i인덱스 삽입시, i가 빈방이 아니라서 i+1, i+2... 탐색하면 망한다.
    객체로 해결하고..
    인덱스의 next를 계속 탐색하면서, 다음이 없을 때 까지 등록한다.
    그럼 데이터를 넣어서 next를 정해야하면.. next = while(next)까지..
    
    우선 그럼 해보자.
*/

function solution(k, room_number) {
  var answer = [];
  const assignRooms = {};

  function nextIdx(next) {
    // 탐색하면서 결국 next만 업데이트 되기 때문에 시간초과 발생.
    // 좀 방향을 바꿔서 탐색을 할 때 마다 탐색하는 인덱스들을 계속 업데이트해줘야할듯.
    while (assignRooms[next]) {
      next = assignRooms[next];
    }

    return next;
  }

  for (let i = 0, len = room_number.length; i < len; i++) {
    let next = nextIdx(room_number[i]);
    answer.push(next);
    assignRooms[next] = next + 1;
  }

  return answer;
}
