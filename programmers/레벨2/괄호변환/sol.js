function solution(w) {
  if (w === "") return "";
  let wLen = w.length;
  let u, v;
  let cnt = 0;

  for (let i = 0; i < wLen; i++) {
    if (w[i] === "(") cnt++;
    else cnt--;
    if (cnt === 0) {
      u = w.slice(0, i + 1);
      v = w.slice(i + 1);
      break;
    }
  }

  const uLen = u.length;
  let flag = 0;
  for (let i = 0; i < uLen; i++) {
    if (u[i] === "(") cnt++;
    else cnt--;
    if (cnt === -1) {
      flag = 1;
      break;
    }
  }

  if (flag) {
    let str = "";
    str += `(${solution(v)})`;
    for (let i = 1; i < uLen - 1; i++) {
      if (u[i] === "(") str += ")";
      else str += "(";
    }
    return str;
  }
  return u + solution(v);
}
