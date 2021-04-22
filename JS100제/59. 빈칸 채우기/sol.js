/*
총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 
그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.
*/

function sol(str) {
  let len = str.length;
  let equalLen = 50 - len;
  let answer = "";
  for (let i = 0; i < equalLen / 2; i++) answer += "=";
  answer += str;
  for (let i = 0; i < equalLen / 2; i++) answer += "=";

  return answer;
}

sol("adsfqewfwqefasdv");

// padStart, padEnd 메소드 이용해보기.

function sol(str) {
  const n = 25 + parseInt(str.length / 2);
  const a = str.padStart(n, "(");
  return a.padEnd(50, ")");
}

sol("qwefqwvas");
