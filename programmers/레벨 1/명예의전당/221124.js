function solution(k, score) {
  var answer = [];
  const honors = [];

  for (let next of score) {
    if (honors.length < k) {
      honors.push(next);
    } else {
      const minHonorsScore = min(honors);
      if (next > minHonorsScore) {
        honors.splice(honors.indexOf(minHonorsScore), 1);
        honors.push(next);
      }
    }

    answer.push(min(honors));
  }

  return answer;
}

function min(arr) {
  return Math.min(...arr);
}

/**
 * 점수가 상위 k번째 이내면, 명예의 전당에 올라간다.
 * 그러므로 시작 후 k일까지는 모두가 명예의전당에 올라간다.
 * k일 이후부터, 순위가 뒤바뀔 수 있다.
 *
 * 1일부터 마지막까지의 점수가 주어졌을 때, 매일 발표된 명예의전당 최하위점수를 구하자.
 *
 *
 */
