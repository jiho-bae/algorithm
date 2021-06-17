function solution(d) {
  const dLen = d.length;
  let tmp = 0;
  let ans = [];

  for (let i = 0; i < dLen; i++) {
    if (d[i] >= 0 && d[i] <= 9) {
      if (d[i] === "1" && d[i + 1] === "0") {
        tmp = 10;
        i++;
      } else tmp = +d[i];
    } else if (d[i] === "S") ans.push(tmp);
    else if (d[i] === "D") ans.push(Math.pow(tmp, 2));
    else if (d[i] === "T") ans.push(Math.pow(tmp, 3));
    else if (d[i] === "*") {
      if (ans.length === 1) {
        ans[ans.length - 1] *= 2;
      } else {
        ans[ans.length - 1] *= 2;
        ans[ans.length - 2] *= 2;
      }
    } else if (d[i] === "#") ans[ans.length - 1] *= -1;
  }
  return ans.reduce((s, v) => s + v, 0);
}
