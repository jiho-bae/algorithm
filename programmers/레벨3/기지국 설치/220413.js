function solution(n, stations, w) {
  const lenOfPaths = [];
  const coverage = 2 * w + 1;

  let startPos = 1;

  stations.forEach((station) => {
    if (startPos > n) return;

    const [lowPos, highPos] = [station - w, station + w];
    if (startPos < lowPos) {
      lenOfPaths.push(lowPos - startPos);
    }
    startPos = highPos + 1;
  });

  if (startPos <= n) {
    lenOfPaths.push(n - startPos + 1);
  }

  function getCntOfPath(acc, val) {
    const cnt = Math.ceil(val / coverage);
    return acc + cnt;
  }

  const cnt = lenOfPaths.reduce(getCntOfPath, 0);

  return cnt;
}
