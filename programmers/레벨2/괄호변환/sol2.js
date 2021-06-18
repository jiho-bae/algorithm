function solution(w) {
  if (w === "") return "";
  let u, v;
  let cnt = 0;

  const wLen = w.length;
  for (let i = 0; i < wLen; i++) {
    w[i] === "(" ? cnt++ : cnt--;
    if (cnt === 0) {
      u = w.slice(0, i + 1);
      v = w.slice(i + 1);
      break;
    }
  }

  const uLen = u.length;
  for (let i = 0; i < uLen; i++) {
    u[i] === "(" ? cnt++ : cnt--;
    if (cnt < 0) {
      let str = "";
      str += `(${solution(v)})`;
      for (let j = 1; j < uLen - 1; j++) {
        u[j] === "(" ? (str += ")") : (str += "(");
      }
      return str;
    }
  }

  return u + solution(v);
}
