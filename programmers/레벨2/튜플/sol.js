function solution(s) {
  const answer = [];
  s.slice(2, s.length - 2)
    .split("},{")
    .map((str) => str.split(",").map(Number))
    .sort((a, b) => a.length - b.length)
    .forEach((arr) => {
      arr.forEach((v) => {
        if (!answer.includes(v)) answer.push(v);
      });
    });
  return answer;
}
