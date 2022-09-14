//효율성1에서 Timeout

function reverse(str) {
  return str.split('').reverse().join('');
}

function solution(s) {
  const len = s.length;

  for (let i = len; i > 0; i--) {
    const backIdx = i % 2;
    const halfI = parseInt(i / 2);

    for (let j = 0; j <= len - i; j++) {
      const front = s.slice(j, j + halfI);
      const back = reverse(s.slice(j + halfI + backIdx, j + i));

      if (front === back) return i;
    }
  }
}
