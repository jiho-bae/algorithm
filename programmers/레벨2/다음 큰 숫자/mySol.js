// 효율성 테스트 탈락.

function solution(n) {
  function getCount(n) {
    let cnt = 0;
    for (let i = n; i > 0; i--) {
      if (n % 2 === 1) cnt++;
      n = parseInt(n / 2);
    }
    return cnt;
  }

  let cnt1 = getCount(n);
  let cnt2;

  while (true) {
    cnt2 = getCount(++n);
    if (cnt1 === cnt2) return n;
  }
}

// 반복문을 돌지 말고
//Number.toString 메서드와 이진수의 합계를 이용해 구해보자.

function solution(n) {
  function getCount(n) {
    n = n.toString(2);
    const cnt = n.split("").reduce((sum, val) => sum + val, 0);
    return cnt;
  }

  let cnt1 = getCount(n);
  let cnt2;

  while (true) {
    cnt2 = getCount(++n);
    if (cnt1 === cnt2) return n;
  }
}

// 정규식, 재귀를 사용해보자.

function solution(n, k = n + 1) {
  return n.toString(2).match(/1/g).length === k.toString(2).match(/1/g).length
    ? k
    : solution(n, k + 1);
}
