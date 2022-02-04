const arr = [5, 6, 3, 1, 8, 7, 2, 4];

function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let idx = i - 1;
    const tmp = arr[i];
    while (tmp < arr[idx] && idx >= 0) {
      arr[idx + 1] = arr[idx];
      idx--;
    }
    arr[idx + 1] = tmp;
  }

  return arr;
}

console.log(insertionSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]
