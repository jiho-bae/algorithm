// 맨 뒤의 0은 2*5로 생성되므로 2와 5 값을 생각한다.
// nCm = n!/(n-m)!*(m!) 의 값을 가진다.
//
const twoCnt = (n) => {
  let answer = 0;
  while (n !== 0) {
    n = parseInt(n / 2);
    answer += n;
  }
  return answer;
};

const fiveCnt = (n) => {
  let answer = 0;
  while (n !== 0) {
    n = parseInt(n / 5);
    answer += n;
  }
  return answer;
};

const sol = (str) => {
  let [n, m] = str.split(" ");
  if (m === 0) console.log(0);
  else {
    let min = Math.min(
      twoCnt(n) - twoCnt(n - m) - twoCnt(m),
      fiveCnt(n) - fiveCnt(n - m) - fiveCnt(m)
    );
    console.log(min);
  }
};

let input = "";
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = line;
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
