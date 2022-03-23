function binarySearch(arr, start, end, target) {
  let answer = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      answer = mid;
      break;
    } else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return answer;
}
