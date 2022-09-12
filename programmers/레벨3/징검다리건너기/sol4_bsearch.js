/*
    binary Search로 풀면 된다고 하니 풀어보자..
*/

// map 메서드에서 시간초과 발생하여 for문으로 대체하였음.

// function isPossible(stones, mid, k) {
//   const len = stones.length;
//   const copied = stones.slice().map((stone) => stone - mid);
//   let cnt = 0;

//   for (let i = 0; i < len; i++) {
//     cnt = copied[i] <= 0 ? cnt + 1 : 0;

//     if (cnt >= k) return false;
//   }

//   return true;
// }

// function solution(stones, k) {
//   let left = 0;
//   let right = 200000000;

//   while (left <= right) {
//     const mid = parseInt((left + right) / 2);

//     if (isPossible(stones, mid, k)) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return left;
// }

function isPossible(stones, mid, k) {
  const len = stones.length;
  const copied = stones.slice();
  let cnt = 0;

  for (let i = 0; i < len; i++) {
    copied[i] -= mid;
  }

  for (let i = 0; i < len; i++) {
    cnt = copied[i] <= 0 ? cnt + 1 : 0;

    if (cnt >= k) return false;
  }

  return true;
}

function solution(stones, k) {
  let left = 0;
  let right = 200000000;

  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (isPossible(stones, mid, k)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
