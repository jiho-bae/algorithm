function solution(s) {
  let answer = [0, 0];
  if (s === "1") return answer;

  let x = s,
    c;

  while (x !== "1") {
    x = x.split("0");
    answer[0]++;
    answer[1] += x.length - 1;
    x = x.join("");
    c = x.length;
    x = c.toString(2);
  }
  return answer;
}
