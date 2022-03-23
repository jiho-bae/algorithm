function binarySearch(arr, start, end, target) {
  if (start > end) return;
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    binarySearch(arr, mid + 1, end);
  } else {
    binarySearch(arr, start, mid - 1);
  }
}
