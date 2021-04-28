/*천하제일 먹기 대회가 개최되었습니다.
이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다. 

1. 같은 이름의 선수는 없습니다.
2. 접시의 수가 같은 경우는 없습니다.
*/

function sol(n, d) {
  let arr = [];
  const len = n.length;

  for (let i = 0; i < len; i++) {
    arr.push([n[i], d[i]]);
  }
  arr = arr
    .sort((a, b) => b[1] - a[1])
    .map((value, idx) => [value[0], idx + 1]);

  return arr;
}

let names = ["손오공", "야모챠", "메지터", "비콜로"];
let dishes = [70, 10, 55, 40];
sol(names, dishes);
