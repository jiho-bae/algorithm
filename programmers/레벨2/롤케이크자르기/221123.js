function solution(topping) {
  var answer = 0;
  const len = topping.length;
  const left = {};
  const right = {};
  left[topping[0]] = 1;

  for (let i = 1; i < len; i++) {
    if (right[topping[i]]) {
      right[topping[i]]++;
    } else {
      right[topping[i]] = 1;
    }
  }

  let leftLen = 1;
  let rightLen = Object.keys(right).length;

  function addTopping(obj, key) {
    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
      leftLen++;
    }
  }

  function delTopping(obj, key) {
    obj[key]--;

    if (obj[key] === 0) {
      rightLen--;
    }
  }

  let idx = 0;
  while (++idx < len) {
    const next = topping[idx];
    addTopping(left, next);
    delTopping(right, next);

    if (leftLen === rightLen) answer++;
  }

  return answer;
}

/**
 * 롤케이크를 두 조각으로 잘라 한조각씩 나눠먹으려고 한다.
 * 케이크를 자를 때 토핑이 동일해야 한다.
 * [1,2,1,3,1,4,1,2]의 토핑이 올려져있는 상황에서..
 * [1,2,1,3], [1,4,1,2]로 자른다면? 각각 3종류의 토핑을 맛볼 수 있어 공평.
 * [1,2,1,3,1], [4,1,2]로 자른다면? 각각 3종류의 토핑을 맛볼 수 있어 공평.
 *
 * 공평하게 나눌 수 있는 모든 경우의수를 반환하면 된다.
 *
 *
 * left, right를 담은 객체를 보관한다.
 * left에는 idx의 토핑을 추가한다. right에는 idx의 토핑을 제거한다.
 * right에 idx 토핑이 0이 되었다면, 토핑 키를 제거한다.
 * left, right의 key 갯수가 같을 때 마다 카운트해준다.
 */
