function solution(k, tangerine) {
  var answer = 0;
  const cntObj = {};

  tangerine.forEach((tgr) => {
    cntObj[tgr] = tgr in cntObj ? cntObj[tgr] + 1 : 1;
  });

  const cntOfSize = Object.values(cntObj).sort((a, b) => b - a);

  let target = k;
  let idx = 0;

  while (1) {
    const cnt = cntOfSize[idx];
    const minus = Math.min(cnt, target);
    cntOfSize[idx][1] -= minus;
    target -= minus;

    if (target === 0) {
      answer++;
      break;
    }

    if (cnt === minus) {
      idx++;
      answer++;
    }
  }

  return answer;
}

/**
 * 수확한 귤 중 K개를 골라 상자 하나르 만든다.
 * 귤을 크기별로 분류했을 때 종류를 최소화하는 것이 목적.
 *
 * 각 숫자를 키로 가지는 객체를 선언한다.
 * 값(갯수)가 큰 순서대로 정렬한 뒤에, 상자에 담아 갯수를 출력한다.
 */
