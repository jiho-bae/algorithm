function solution(N, stages) {
  const success = Array.from({ length: N + 1 }, () => 0);
  const fail = Array.from({ length: N + 1 }, () => 0);
  for (let stage of stages) {
    for (let i = 1; i < stage; i++) success[i]++;
    fail[stage]++;
  }
  const result = [];
  for (let i = 1; i <= N; i++)
    result.push([i, fail[i] / (success[i] + fail[i])]);
  result.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));
  const arr = [];
  for (let x of result) arr.push(x[0]);
  return arr;
}
