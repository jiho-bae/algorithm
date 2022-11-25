function solution(e, starts) {
  const denominators = getAllDenominators(e);
  const lowestMaxNumArr = getLowestMaxNumArr(denominators, e);

  return starts.map((s) => lowestMaxNumArr[s]);
}

function getAllDenominators(size) {
  const result = new Array(size + 1).fill(2);
  result[0] = 0;
  result[1] -= 1;

  for (let i = 2; i <= size; i++) {
    for (let j = 2, end = Math.floor(size / i); j <= end; j++) {
      result[i * j]++;
    }
  }

  return result;
}

function getLowestMaxNumArr(arr, size) {
  const lowestMaxNumArr = new Array(size + 1).fill(0);
  lowestMaxNumArr[size] = size;

  for (let i = size - 1; i > 0; i--) {
    const cur = arr[i];
    const prev = arr[lowestMaxNumArr[i + 1]];

    lowestMaxNumArr[i] = cur >= prev ? i : lowestMaxNumArr[i + 1];
  }

  return lowestMaxNumArr;
}

/**
 * 천하제일 암산대회.
 * 억억단은 1억*1억의 행렬.
 * 적당한수 e를 먼저 알려주고, e이하의 수 s를 여러번 말한다.
 * x를 구해야 하는데 각 s에 대해 s<=x<=e인 수 중, 억억단에 가장 많이 등장한 수를 답한다.
 * 가장 많이 등장한 수가 여러개면, 가장 작은 수를 답한다.
 *
 * 1<=e<=500만
 * 1<=starts.length<=min(e, 10만)
 * 1<=start<=e
 *
 * e=8, s=1이라면?
 * 12345678
 * 2468
 * 36
 * 48 이므로
 * 1:1
 * 2:2,3,5,7
 * 3:4
 * 4:6,8 이다.
 *
 * e<=500만이므로, 배열 크기는 501만이면 되고...
 * 각 숫자들은 약수의 갯수만큼 억억단에 언급된다.
 * ex) 3=>[1,3]=>2회. 6=>[1,2,3,6]=>4회
 * 1~500만까지 약수의 갯수를 구하고...
 * s~e까지의 범위에서 최댓값을 찾은뒤, 가장 먼저 나오는 최댓값을 출력해보자.
 */
