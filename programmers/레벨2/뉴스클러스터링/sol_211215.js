function solution(str1, str2) {
  const PRODUCT = 65536;

  function splitTwoLetters(str) {
    const regExp = /[A-Z]{2}/;
    const len = str.length;
    const upperCaseStr = str.toUpperCase();
    const arr = [];

    for (let i = 0; i < len - 1; i++) {
      const target = upperCaseStr.slice(i, i + 2);
      if (regExp.test(target)) {
        arr.push(target);
      }
    }
    return arr;
  }

  const str1Arr = splitTwoLetters(str1);
  const str2Arr = splitTwoLetters(str2);
  const intersect = [];

  if (!str1Arr.length && !str2Arr.length) return PRODUCT;

  const restStr1Arr = str1Arr.filter((str) => {
    const str2Idx = str2Arr.indexOf(str);
    if (str2Idx !== -1) {
      intersect.push(str2Arr.splice(str2Idx, 1));
      return false;
    }
    return true;
  });

  const jacaard =
    intersect.length / (intersect.length + restStr1Arr.length + str2Arr.length);
  return Math.floor(jacaard * PRODUCT);
}
