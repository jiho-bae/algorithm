/*
패션의 선도주자 청길이는 패션의 발전을 위해 패션쇼를 방문해 유니크한 아이템을 조사하기로 하였습니다.
청길이는 입장하는 사람들의 패션에서 처음 보는 아이템 만을 기록합니다. 
이때 청길이의 기록에서 아래 규칙에 맞게 배열로 출력해 주세요.

    1. 청길이는 각 옷의 종류를 정수로 기록해 놓습니다.
         ex) 입력은 "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4" 형태의 문자열입니다.
    2. 기록은 청길이가 번호 순서로 유니크한 옷의 번호를 적습니다.
    3. 유니크한 옷은 기록된 순서로 추출되고 출력됩니다.
ex) 출력은 [3,1,4,2]입니다.
*/

function sol(str) {
  let splitStr = str.split(/[0-9]번: /g);
  splitStr.shift();

  let arrs = [];
  for (let x of splitStr) {
    x = x.trim().split(",");
    let arr = [];
    for (let i of x) {
      arr.push(parseInt(i));
    }
    arrs.push(arr);
  }

  let answer = [];
  for (let arr of arrs) {
    for (let item of arr) {
      if (answer.includes(item)) continue;
      else answer.push(item);
    }
  }
  return answer;
}

let str = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4";
sol(str);
