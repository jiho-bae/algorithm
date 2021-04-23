/*
한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.

교수님이 줄임말을 배우기 위해 아래와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.
*/

// 1. split + map + join

function sol(str) {
  let answer = "";
  answer = str
    .split(" ")
    .map((word) => word[0])
    .join("");
  return answer;
}

let str = "복잡한 세상 편하게 살자";
sol(str);

let str2 = "간절함이 없는 사람은 발전하지 못한다.";
sol(str2);

// 2. slice

function sol2(str) {
  let answer = "";
  for (let x of str.split(" ")) answer += x.slice(0, 1);
  return answer;
}

let str3 = "별걸 다 줄인다";
sol2(str3);
