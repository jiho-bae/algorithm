function solution(order) {
  var answer = 0;
  const subConveyor = [];
  const end = order.length;
  let idx = 0;
  let conveyor = 1;

  while (idx < end) {
    if (order[idx] === conveyor) {
      answer++;
      idx++;
      conveyor++;
    } else if (order[idx] > conveyor) {
      subConveyor.push(conveyor++);
    } else if (order[idx] === subConveyor[subConveyor.length - 1]) {
      subConveyor.pop();
      answer++;
      idx++;
    } else {
      break;
    }
  }

  return answer;
}

/**
 * 택배상자를 트럭에 싣는다.
 * 택배상자 크기는 모두 같고, 1~n번까지 일렬로 전달된다.
 * 1번부터 순서대로 내릴 수 있다. 그러나, 배달순서와 맞춰서 실어줘야 한다.
 * 지금 싣는 것이 아니라면, 순서가 될 때 까지 보관해야 해서 보조 컨베이어벨트에 올린다.
 * 보조컨베이어벨트는 앞뒤로 이동이 가능하나, 가장 마지막 상자만 꺼낼 수 있다.
 * 보조컨베이어벨트를 이용하고도 기사가 원하는대로 실을 수 없다면 더이상 싣지 않는다.
 *
 * 그래서 택배기사가 원하는 최대한의 상자를 몇개를 실을 수 있는지 구하면 된다.
 *
 * 1. 현재 실어야 할 order의 숫자를 target으로 삼는다.
 * 2. 숫자를 1~n까지 탐색한다. target보다 작다면 계속 보조컨베이어벨트에 담는다.
 * 3. target보다 탐색하는 숫자가 크다면, 보조컨베이어벨트에서 찾는다.
 * 4. 탐색 숫자가 target보다 크지만 보조컨베이어벨트 최상단의 숫자가 target이 아니라면 게임이 종료된다.
 */
