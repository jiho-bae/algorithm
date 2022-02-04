const arr = [4, 6, 3, 2, 0, 1, 5];

function selectionSort(arr) {
  const len = arr.length;

  for (let cur = 0; cur < len; cur++) {
    let idx = cur;
    for (let j = cur + 1; j < len; j++) {
      if (arr[idx] > arr[j]) {
        idx = j;
      }
    }
    [arr[cur], arr[idx]] = [arr[idx], arr[cur]];
  }
  return arr;
}

console.log(selectionSort(arr)); // [0, 1, 2, 3, 4, 5, 6]
