function solution(w) {
  if (w === '') return '';
  let u, v;
  const wLen = w.length;
  let cnt = 0;

  for (let i = 0; i < wLen; i++) {
    if (w[i] === '(') cnt++;
    else cnt--;
    if (!cnt) {
      [u, v] = [w.slice(0, i + 1), w.slice(i + 1)];
      break;
    }
  }

  const uLen = u.length;
  const solV = solution(v);

  for (let i = 0; i < uLen; i++) {
    if (u[i] === '(') cnt++;
    else cnt--;
    if (cnt < 0) {
      const str = '(' + solV + ')';
      const reverseU = [...u.slice(1, uLen - 1)]
        .map((alphabet) => (alphabet === ')' ? '(' : ')'))
        .join('');
      return str + reverseU;
    }
  }

  return u + solV;
}
