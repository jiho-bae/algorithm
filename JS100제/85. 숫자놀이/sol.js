/*
일정한 규칙을 가지고 있는 숫자를 나열하는 놀이를 하는 중입니다.
이전 숫자에서 각 숫자의 개수를 나타내어 숫자로 만들고 다시 그 숫자를 같은 규칙으로 만들며 나열합니다.
이 놀이는 1부터 시작합니다.
다음 수는 1이 1개이기 때문에 '11'이 되고,
 '11'에서 1이 2개이기 때문에 그다음은 '12'가 됩니다.

즉,
1. 1  → (1)
2. 11 → (1이 1개)
3. 12 → (1이 2개)
4. 1121 → (1이 1개 2가 1개)
5. 1321 → (1이 3개 2가 1개)
6. 122131 → (1이 2개 2가 1개 3이 1개)
7. 132231 → (1이 3개 2가 2개 3이 1개)

위와 같이 진행되는 규칙을 통해 진행 횟수 N을 입력받으면 해당되는 수를 출력하세요.
*/

const sol = (start, n) => {
  let answer = String(start);
  for (let i = 1; i < n; i++) {
    let map = new Map();
    let str = "";
    for (let x of answer) {
      if (map.has(x)) map.set(x, map.get(x) + 1);
      else map.set(x, 1);
    }
    map = Array.from(map).sort((a, b) => a[0] - b[0]);
    for (let [key, val] of map) str += `${key}${val}`;
    answer = str;
  }
  return answer;
};

let start = 1;
let n = 6;
sol(start, n);
