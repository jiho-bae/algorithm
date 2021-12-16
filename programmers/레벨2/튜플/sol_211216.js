function solution(s) {
  const tupleArr = s
    .slice(2, s.length - 2)
    .split('},{')
    .map((tuple) => tuple.split(',').map(Number))
    .sort((a, b) => a.length - b.length);

  const set = new Set();
  tupleArr.forEach((tuple) => {
    tuple.forEach((t) => set.add(t));
  });

  return [...set];
}
