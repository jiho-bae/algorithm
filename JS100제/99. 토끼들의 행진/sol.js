/*
토끼들이 징검다리를 건너려고 합니다. 하지만 돌이 부실해서 몇 번 건너지 못할 것 같습니다.
대기 중인 토끼들의 통과 여부를 배열에 담아 출력해 주세요.

1. 각 돌들이 얼마나 버틸 수 있는지 배열로 주어집니다.

2. 각 토끼가 착지할 때마다 돌의 내구도는 1씩 줄어듭니다.
    ex) [1,2,1,4] 각 돌마다 1마리 2마리 1마리 4마리의 착지를 버틸 수 있습니다.

3. 토끼들은 점프력이 각자 다릅니다. 
    ex) [2,1] 첫 번째 토끼는 2칸씩, 두 번째 토끼는 1칸씩 점프합니다.

4. 각 토끼들은 순서대로 다리를 건넙니다.
*/
function sol(d, jump) {
  let len = d.length - 1;
  let answer = [];
  for (let j of jump) {
    let distance = -1;
    let flag = 1;
    while (len >= distance + j) {
      distance += j;
      if (d[distance] === 0) {
        answer.push("fail");
        flag = 0;
        break;
      }
      d[distance] -= 1;
    }
    if (flag) answer.push("pass");
  }
  return answer;
}

let dbility1 = [1, 2, 1, 4];
let jump1 = [2, 1];

sol(dbility1, jump1);

let dbility2 = [2, 2, 3, 4, 5, 3];
let jump2 = [4, 2, 3, 1, 1];

sol(dbility2, jump2);
