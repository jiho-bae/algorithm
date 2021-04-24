/*
탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.

예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.
*/

let towers = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
let rule = "ABD";

function sol(towers, rule) {
  let answer = [];

  for (let tower of towers) {
    let dist = -1;
    let flag = 1;
    for (let x of tower) {
      if (rule.includes(x)) {
        let idx = rule.indexOf(x);
        if (idx > dist) dist = idx;
        else {
          flag = 0;
          break;
        }
      }
    }
    if (flag) answer.push("가능");
    else answer.push("불가능");
  }
  return answer;
}
sol(towers, rule);

// 2. 두개의 함수로 나눠보기.

const CheckBlockOrder = (tower, rule) => {
  let tmp = rule.indexOf(rule[0]);
  for (let x of tower) {
    if (rule.includes(x)) {
      const idx = rule.indexOf(x);
      if (tmp > idx) return "불가능";
      tmp = idx;
    }
  }
  return "가능";
};

function solution(towers, rule) {
  let answer = [];

  for (let tower of towers) {
    answer.push(CheckBlockOrder(tower, rule));
  }
  return answer;
}

let towers = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
let rule = "ABD";
solution(towers, rule);
