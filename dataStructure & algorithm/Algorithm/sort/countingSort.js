const unsortedArr = [5, 6, 3, 1, 8, 7, 2, 4, 5, 9, 5, 9];

function countingSort(arr) {
  const hash = {};
  const countArr = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]]++;
    } else {
      hash[arr[i]] = 1;
    }
  }

  Object.entries(hash).forEach(([key, val]) => {
    const num = +key;
    let iter = val;
    while (iter) {
      countArr.push(num);
      iter--;
    }
  });

  return countArr;
}

console.log(countingSort(unsortedArr)); // [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9]

// O(k+n)의 시간복잡도, 그러나 O(k)의 공간복잡도 필요. 특히 정렬 대상은 제한된 범위를 가진 정수여야 함.
