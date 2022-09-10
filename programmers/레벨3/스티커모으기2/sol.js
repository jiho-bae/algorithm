/*
      N개의 스티커. 도넛차트.
      몇장을 뜯어내 숫자가 최대합이 되도록.
      한장 뜯어냄 -> 양쪽으로 인접한 스티커 찢어짐.
      어떻게 최대값을 찾을지 생각해보고, 배열 첫원소와 마지막원소는 연결되어있다.
      
      1<= N.length <= 10만
      1<= N element <= 100
      sticker 처음 - 마지막이 연결되어있음.
  
      그리디가 맞나.? dp는 아닐까?
      
      숫자와 순서가 모두 정해져있다. 숫자 선택시 이전과 이후 숫자는 선택할 수 없다.
      우선 맨 처음 원소를 선택하면 될까?
      max를 찾는 방식으로 해보자.
      a[0]은 a[0]이다.
      a[1]은 a[1]이다.
      a[2]는 a[0] + sticker[2]이다.
      a[3]은 a[0] + sticker[3] 이거나, a[1]+sticker[3]일 것이다.
      a[4]는 a[0] + sticker[4] 이거나, a[1]+sticker[4], a[2]+sticker[4]일 것.
      
      a[4]의 경우에 a[0]까지 따질필요가 있나? -> a[1],a[2]만 따지면 된다. 어차피 a[0]은 a[2]에 포함된다.
      
      그러므로 a[n] = sticker[n] + Math.max(a[n-2], a[n-3]) 이면 될 듯 하다.
      
      근데 맨 마지막 원소의 선택여부는? -> 맨 첫 원소가 선택된경우 이거는 실행하면 안된다.
      그럼 dp를 2개 만들어서 첫번째 원소를 선택한 dp, 선택하지 않은 dp 2개를 만들고
      첫번째 원소를 선택한 dp는 마지막 계산을 수행하지 않고, 후자는 마지막 계산을 수행하고..
      이 2개의 dp중에 맥스값을 반환해보자.
  */

function solution(sticker) {
  const len = sticker.length;
  let max1 = -1;
  let max2 = -1;

  if (len <= 3) return Math.max(...sticker);

  const dp1 = new Array(len).fill(0);
  const dp2 = new Array(len).fill(0);
  dp1[0] = sticker[0];
  dp1[1] = dp2[1] = sticker[1];
  dp1[2] = sticker[2] + dp1[0];
  dp2[2] = sticker[2];

  for (let i = 3; i < len; i++) {
    const maxDp2 = Math.max(dp2[i - 2], dp2[i - 3]);
    dp2[i] = sticker[i] + maxDp2;
    max2 = Math.max(max2, dp2[i]);

    if (i === len - 1) break;
    const maxDp1 = Math.max(dp1[i - 2], dp1[i - 3]);
    dp1[i] = sticker[i] + maxDp1;
    max1 = Math.max(max1, dp1[i]);
  }

  return Math.max(max1, max2);
}
