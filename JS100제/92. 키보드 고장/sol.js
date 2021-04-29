/*
P 회사의 회계를 처리하던 은정은 커피를 마시다가 키보드에 커피를 쏟고 말았습니다.
휴지로 닦고 말려보았지만 숫자 3, 4, 6이 도통 눌리지 않습니다.
10분 뒤, 모든 직원들에게 월급을 입금해 주어야 합니다.
여유 키보드는 없으며, 프로그래밍을 매우 잘하고, 모든 작업을 수작업으로 하고 있습니다.

이에 눌리지 않는 키보드를 누르지 않고 월급 입금을 두 번에 나눠주고 싶습니다.

1. 직원은 2000명이며, 3초 이내 수행을 해야합니다.
2. 입력값의 형식은 csv파일형식이며 이과장 '3,000,000', 'S은행', '100-0000-0000-000' 형식으로 주어집니다.
3. 출력값의 형식은 csv파일형식이며 이과장 '1,500,000', '1,500,000', 'S은행', '100-0000-0000-000' 입니다. 또는 '1,000,000', '2,000,000', 'S은행', '100-0000-0000-000' 도 괜찮습니다.
*/

function sol(input) {
  input = input.split("\n");
  let answer = ``;

  for (let line of input) {
    let splitLine = line.split(",");
    let sal = splitLine.slice(1, splitLine.length - 2).join("");
    sal = sal.substring(1, sal.length - 1);
    sal = String(sal / 2);

    let salary = "";
    while (sal.length > 3) {
      let len = sal.length;
      salary = `,${sal.slice(len - 3, len)}` + salary;
      sal = sal.slice(0, len - 3);
    }
    salary = sal + salary;

    let str = `${splitLine[0]}, ${salary}, ${salary}, ${
      splitLine[splitLine.length - 2]
    }, ${splitLine[splitLine.length - 1]} \n`;
    answer += str;
  }
  return answer;
}

let input = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'`;

sol(input);
