function solution(k, ranges) {
  const coordinates = getWoobakCoordinates(k);
  const areas = getAreas(coordinates);
  const end = areas.length;

  const answer = ranges.map((range) => {
    const [a, b] = getRange(range, end);
    if (a >= b) return -1;

    return areas.slice(a + 1, b).reduce((acc, val) => acc + val, 0);
  });

  return answer;
}

function getWoobakCoordinates(k) {
  const coordinates = [k];
  let woobak = k;

  while (woobak !== 1) {
    if (woobak % 2 === 0) woobak /= 2;
    else woobak = woobak * 3 + 1;

    coordinates.push(woobak);
  }

  return coordinates;
}

function getAreas(coordinates) {
  const len = coordinates.length;
  const areas = new Array(len).fill(0);

  for (let i = 1; i < len; i++) {
    const bottom = coordinates[i - 1];
    const top = coordinates[i];
    const area = ((bottom + top) * 1) / 2;

    areas[i] = area;
  }

  return areas;
}

function getRange([a, b], end) {
  return [a, end + b];
}

/**
 * 모든 자연수 n에 대해 다음 작업 반복시 항상 1로 만들 수 있다는 추측.
 * 1-1. 입력된숫자가 짝수면 2로 나눈다.
 * 1-2. 입력된 숫자가 홀수면 3을 곱하고 1을 더한다.
 * 2. 결과가 1보다 크면 1번을 반복한다.
 *
 * 수가 커졌다작아졌다해서 우박수열이라 불리기도 한다.
 * 초항이 k인 우박수열을, x=0일 때 y=k이고 다음 우박수는 x=1에 표시한다.
 * 우박수가 1이 될 때 까지 점들을 찍고 인접한 점을 직선으로 연결하면 꺾은선그래프가 나온다.
 *
 * 꺾은선그래프를 구한뒤 정적분을 한다. [a,b]의 정적분은 x=a, x=b, y=0으로 둘러싸인 공간의 면적이다.
 * ranges에 정적분 구간들이 여러개 주어지고, result에 각 정적분 구간들의 결과를 출력한다.
 *
 * 2<=k<=1만
 * 1<Ranges.length<=1만
 * 구간 0<=a<200, -200<b<=0이다.
 *
 * 정답엔 소수가 포함된다.
 */
