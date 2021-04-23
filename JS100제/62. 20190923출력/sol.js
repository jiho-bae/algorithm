/*
`20210424`을 출력합니다.  아래 기준만 만족하면 됩니다.

1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20210424)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
 */

function sol() {
  let answer = "";
  let str = "abbcccc";
  answer += str.match(/b/g).length;
  answer += Number(str.match(/z/g));
  answer += str.match(/b/g).length;
  answer += str.match(/a/g).length;
  answer += Number(str.match(/z/g));
  answer += str.match(/c/g).length;
  answer += str.match(/b/g).length;
  answer += str.match(/c/g).length;
  console.log(answer);
}

sol();
