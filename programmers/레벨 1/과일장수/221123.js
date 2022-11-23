function solution(k, m, score) {
  var answer = 0;
  let idx = 0;
  const scoreLen = score.length;

  score.sort((a, b) => b - a);

  while (idx + m < scoreLen) {
    answer += Math.min(...score.slice(idx, idx + m)) * m;
    idx += m;
  }

  return answer;
}

/**
 * 1~k점까지 점수로 분류한다.
 * k점이 최상품, 1점이 최하품.
 * 한상자에 m개씩 포장하는데,
 * 가장 낮은 점수가 p이면, 사과 한상자 가격이 p*m이다.
 *
 * 사과를 내림차순or오름차순 정렬한 뒤, 가장 큰 점수의 사과부터 포장해나가면 된다.
 */
