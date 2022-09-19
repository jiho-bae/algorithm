// 인덱스 슨회 2번만으로 끝남.
// len ~ 0까지 순회하면서, 현재 값이 오른쪽 최소보다 작다면, 오른쪽 최소를 갱신
// 현재 값이 오른쪽 최소보다 크면 현재 값을 0으로 갱신.
// a가   [-1, -3, 5, 4, 3, 1, 2] 라고 하면?
// arr는 [0,  -3, 0, 0, 0, 1, 2] 가 된다.
// 0~len까지 순회하면서, 현재 값이 왼쪽 최소보다 작거나 같으면 왼쪽 최소 갱신, 카운트 증가.
// 왜 카운트 증가? => 현재 값이 왼쪽, 오른쪽보다 크지만 않으면 됨. 하나보다 작기만 하면 정답.
// 그러므로 왼쪽최소값이 현재값보다 크다면, 카운팅해주고 다음 판별을 위해 왼쪽최소를 갱신.
// arr[i]일때는 왜 증가? => 오른쪽최소를 기준으로 하므로, 카운팅.

function solution(a) {
  let arr = Array(a.length).fill(1);
  let minR = a[a.length - 1];
  let minL = a[0];
  let ans = 0;
  for (let i = a.length - 2; i > 0; i--) {
    if (a[i] < minR) minR = a[i];
    else arr[i] = 0;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= minL) {
      minL = a[i];
      ans++;
    } else if (arr[i]) ans++;
  }
  return ans;
}
