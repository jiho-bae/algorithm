const arr = [5, 6, 3, 1, 8, 7, 2, 4];

function merge(ltArr, rtArr) {
  const result = [];
  let ltIdx = 0,
    rtIdx = 0;

  while (ltIdx < ltArr.length && rtIdx < rtArr.length) {
    if (ltArr[ltIdx] < rtArr[rtIdx]) {
      result.push(ltArr[ltIdx++]);
    } else {
      result.push(rtArr[rtIdx++]);
    }
  }

  const rest = ltIdx < ltArr.length ? ltArr.slice(ltIdx) : rtArr.slice(rtIdx);
  result.push(...rest);

  return result;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const midIdx = Math.floor(arr.length / 2);
  const ltArr = arr.slice(0, midIdx);
  const rtArr = arr.slice(midIdx);

  return merge(mergeSort(ltArr), mergeSort(rtArr));
}

mergeSort(arr);

// 평균 O(nlog2(n)), 공간복잡도 O(n)
