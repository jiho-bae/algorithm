function solution(w) {
  if (w === "") return "";
  let u, v;
  const wLen = w.length;
  let cnt = 0;

  for (let i = 0; i < wLen; i++) {
    if (w[i] === "(") cnt++;
    else cnt--;
    if (!cnt) {
      u = w.slice(0, i + 1);
      v = w.slice(i + 1);
      break;
    }
  }

  const uLen = u.length;
  for (let i = 0; i < uLen; i++) {
    if (u[i] === "(") cnt++;
    else cnt--;
    if (cnt < 0) {
      let str = `(${solution(v)})`;
      str += u
        .slice(1, uLen - 1)
        .split("")
        .reverse()
        .join("");
      return str;
    }
  }

  return u + solution(v);
}
