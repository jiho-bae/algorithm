/*
문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
*/

function sol(str) {
  let cnt = 1;
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += `${str[i]}${cnt}`;
      cnt = 1;
    }
  }
  return answer;
}

sol("aaabbbbcdddd");
