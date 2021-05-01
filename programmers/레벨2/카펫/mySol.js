function solution(brown, yellow) {
  const aliquot = [];
  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      aliquot.push(i);
    }
  }

  for (let i = 0, j = aliquot.length - 1; i <= j; i++, j--) {
    if ((aliquot[i] + 2) * (aliquot[j] + 2) === brown + yellow) {
      return [aliquot[j] + 2, aliquot[i] + 2];
    }
  }
}
