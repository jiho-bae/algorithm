/*
학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다.
   만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.
*/

let schedule = ["12:30", "13:20", "14:13", "21:47", "23:10"];
let now = "12:40";

function sol(sc, n) {
  let answer = [];
  const time = n.split(":");

  for (let x of sc) {
    const bus = x.split(":");
    let hour, min;

    if (bus[0] <= time[0] && bus[1] <= time[1]) answer.push("지나감");
    else {
      if (bus[1] >= time[1]) {
        hour = bus[0] - time[0];
        min = bus[1] - time[1];
      } else {
        hour = bus[0] - time[0] - 1;
        min = Number(bus[1] - time[1]) + 60;
      }
      if (hour < 10) hour = `0${hour}`;
      if (min < 10) min = `0${min}`;
      answer.push(`${hour}시간 ${min}분`);
    }
  }
  return answer;
}

sol(schedule, now);
