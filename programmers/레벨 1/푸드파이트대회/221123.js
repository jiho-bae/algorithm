function solution(food) {
  var answer = '0';

  while (food.length > 1) {
    const calory = String(food.length - 1);
    const popFood = food.pop();
    const half = Math.floor(popFood / 2);
    const arrangedFood = calory.repeat(half);

    answer = arrangedFood + answer + arrangedFood;
  }

  return answer;
}

/**
 * 푸드파이트대회.
 * 1vs1대결. 대결마다 음식 종류, 양이 바뀐다.
 * 한 선수는 왼쪽에서부터, 다른 선수는 오른쪽에서부터. 중앙에 물을 먼저 마시면 승리.
 * 두 선수가 모두 같은 음식을 순서대로 먹어야함. 1개의 쌍이 아닌 음식은 사용 불가.
 *
 * 대회를 위한 음식 배치를 반환해보기.
 * food[0]는 물이며 항상 1.
 * food의 인덱스는 칼로리 양. 적은순서대로 먹어야함.
 *
 * 1. "0"의 문자열부터 시작한다.
 * 2. 맨 마지막 인덱스부터 짝수만큼만 숫자를 가져온 뒤, "0"의 문자의 앞 뒤에 붙여나간다.
 * 3. 1번인덱스까지 2번 과정을 마무리하고, 결과를 반환한다.
 */
