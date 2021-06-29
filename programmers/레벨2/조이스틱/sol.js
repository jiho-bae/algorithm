function solution(name) {
  const a = "A".charCodeAt();
  const z = "Z".charCodeAt();
  const len = name.length;
  let answer = 0;
  name.split("").map((v, i) => {
    const n = v.charCodeAt();
    answer += z - n + 1 < n - a ? z - n + 1 : n - a;
    if (n === a) {
      let nextIdx = i + 1;
      let cntA = 0;
      while (nextIdx < len && name[nextIdx] === "A") {
        nextIdx++;
        cntA++;
      }
      const tmp = (name[0] === "A" ? 0 : (i - 1) * 2) + (len - (1 + i + cntA));
      if (len - 1 > tmp) answer += tmp;
    }
  });
  return answer;
}
