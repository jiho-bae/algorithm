const arr = [5, 6, 3, 1, 8, 7, 2, 4];

function quickSort(arr, left, right) {
  let pivot;
  if (arr.length > 1) {
    pivot = partition(arr, left, right);

    if (left < pivot - 1) {
      quickSort(arr, left, pivot - 1);
    }
    if (pivot < right) {
      quickSort(arr, pivot, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (pivot > arr[left]) left++;
    while (pivot < arr[right]) right--;

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort(arr, 0, arr.length - 1)); // [1, 2, 3, 4, 5, 6, 7, 8]

// 평균 O(nlog2(n)) 최악 O(n^2), 콜스택의 공간복잡도 O(log2(n))
