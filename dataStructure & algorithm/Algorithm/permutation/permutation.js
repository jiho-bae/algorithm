const answer = [];
const strArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function permutation(arr, start, end) {
  if (start === end) {
    answer.push([...arr]);
    return;
  } else {
    for (let i = start; i < end; i++) {
      swap(arr, start, i);
      permutation(arr, start + 1, end);
      swap(arr, start, i);
    }
  }
}

permutation(strArr, 0, strArr.length);

console.log(answer);
