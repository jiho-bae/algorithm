// 효율성 통과.

function compare(str, j, i, backIdx) {
  const halfI = parseInt(i / 2);
  let frontStart = j;
  let backStart = j + halfI + backIdx;
  let backEnd = j + i - 1;

  while (backEnd >= backStart) {
    if (str[frontStart] === str[backEnd]) {
      frontStart++;
      backEnd--;
    } else return false;
  }

  return true;
}

function solution(s) {
  const len = s.length;

  for (let i = len; i > 0; i--) {
    const backIdx = i % 2;

    for (let j = 0; j <= len - i; j++) {
      if (compare(s, j, i, backIdx)) return i;
    }
  }
}
