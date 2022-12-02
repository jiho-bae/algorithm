function solution(cards) {
  var answer = 0;
  cards.unshift(0);
  const cardsLen = cards.length - 1;
  const visits = new Array(cardsLen + 1).fill(0);

  for (let i = 1; i <= cardsLen; i++) {
    visits.fill(0);
    exploreCardsToEnd(visits, cards, i);

    const firstScore = getScore(visits);
    if (firstScore === cardsLen) return 0;

    visits.forEach((visit, nextIdx) => {
      if (visit === 1) return;

      const secondVisits = [...visits];
      exploreCardsToEnd(secondVisits, cards, nextIdx);

      const score = firstScore * (getScore(secondVisits) - firstScore);
      answer = Math.max(answer, score);
    });
  }

  return answer;
}

function exploreCardsToEnd(visits, cards, startIdx) {
  let nextIdx = startIdx;

  while (!visits[nextIdx]) {
    visits[nextIdx] = 1;
    nextIdx = cards[nextIdx];
  }
}

function getScore(arr) {
  return arr.filter((e) => e).length;
}

/**
 * 숫자카드로 혼자 놀기.
 * 100장이 있고, 1~100이 적혀있다.
 * 2~100이하의 자연수를 정해서 그것보다 작거나 같은 숫자를 준비.
 * 준비한 카드수만큼 작은 상자를 준비해 게임 시작.
 *
 * 상자에 카드를 한장씩 넣고 무작위로 섞어 일렬로 나열.
 * 일렬로 나열된 상자를 순서에 따라 1번부터 순차적 증가 번호를 붙임.
 * 상자를 하나 선택해 상자안의 숫자카드 확인.
 * 확인한 카드에 적힌 번호에 해당하는 상자를 열어 담긴 카드에 적힌 숫자 확인.
 * 숫자에 해당하는 번호를 가진 상자를 계속 열고, 이미 열린 상자를 접할때까지 연다.
 *
 * 이렇게 연 상자가 1번그룹.
 * 1번상자들을 다른 상자들과 섞이지 않게 두고, 1번상자그룹을 제외하고 남는상자가 없으면 점수0점종료.
 *
 * 그렇지않으면 남은 상자중 하나를 골라 같은방식으로 연다. 이 그룹은 2번그룹.
 * 1번그룹의 상자수 * 2번그룹의 상자수가 게임점수.
 *
 * 구할 수 있는 최고점수를 구해서 리턴하기.
 */
