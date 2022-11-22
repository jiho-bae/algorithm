function solution(number, limit, power) {
  const nums = new Array(number).fill().map((_, i) => i + 1);
  const cntsOfDivisor = nums.map(getCntOfDivisor);
  const sumOfPower = cntsOfDivisor.reduce((acc, cnt) => {
    return acc + (cnt > limit ? power : cnt);
  }, 0);

  return sumOfPower;
}

function getCntOfDivisor(number) {
  const set = new Set();

  for (let i = 1, sqrt = Math.sqrt(number); i <= sqrt; i++) {
    const share = number / i;

    if (share % 1 === 0) {
      set.add(i);
      set.add(share);
    }
  }

  return set.size;
}
