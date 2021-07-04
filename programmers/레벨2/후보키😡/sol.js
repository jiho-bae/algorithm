function solution(relation) {
  const row = relation.length;
  const col = relation[0].length;
  const candidateKeys = new Set();

  function getCombination(L, idx, size, arr) {
    if (L === size) {
      const ckeyArr = Array.from(candidateKeys);
      out: for (let i = 0; i < ckeyArr.length; i++) {
        for (let j = 0; j < ckeyArr[i].length; j++) {
          if (!arr.includes(ckeyArr[i][j])) continue out;
        }
        return false;
      }
      const candidate = {};
      for (let i = 0; i < row; i++) {
        const keys = relation[i].filter((_, idx) => arr.includes(idx)).join(",");
        if (candidate[keys]) return false;
        candidate[keys] = 1;
      }
      candidateKeys.add(arr);
      return true;
    }

    for (let i = idx; i < col; i++) {
      getCombination(L + 1, i + 1, size, [...arr, i]);
    }
  }

  for (let i = 0; i < col; i++) {
    getCombination(0, 0, i + 1, []);
  }

  return candidateKeys.size;
}
