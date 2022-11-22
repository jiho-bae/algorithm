function solution(arrayA, arrayB) {
  const cd1 = getCd(...arrayA.slice(0, 2));
  const cd2 = getCd(...arrayB.slice(0, 2));
  const allCdOfArrA = getAllCd(cd1, arrayA);
  const allCdOfArrB = getAllCd(cd2, arrayB);
  const deDuplicatedAllCd = deDuplicate(allCdOfArrA, allCdOfArrB);

  return findAnswer(deDuplicatedAllCd, arrayA, arrayB);
}

/**
 * getCd 함수는 num1, num2를 받아 공약수의 배열을 반환해준다.
 * array의 원소가 1개일 때는 num2=undefined이므로, 기본값(0 or 1)을 지정해준다.
 */
function getCd(num1 = 0, num2 = 0) {
  const cd = [];
  const max = Math.max(num1, num2);

  for (let i = 2; i <= max; i++) {
    if (isEqual(num1 % i, 0) && isEqual(num2 % i, 0)) {
      cd.push(i);
    }
  }

  return cd;
}

/**
 * getAllCd 함수는 cdArr(공약수배열), target(카드 array)를 받아
 * target 전체의 공약수 배열을 반환한다.
 */
function getAllCd(cdArr, target) {
  const allCD = [];

  while (cdArr.length) {
    const pop = cdArr.pop();
    let flag = 1;

    for (let i = 0, len = target.length; i < len; i++) {
      if (!isEqual(target[i] % pop, 0)) {
        flag = 0;
        break;
      }
    }

    if (flag) allCD.push(pop);
  }

  return allCD;
}

/**
 * deDuplicate 함수는 두개의 배열을 받아 중복을 없앤 뒤 내림차순 정렬한 배열을 반환한다.
 */
function deDuplicate(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => b - a);
}

/**
 * findAnswer 함수는 공약수배열, arrayA, arrayB를 받아
 * 가장 큰 공약수부터 조회하면서 조건1 or 조건2를 만족한다면 정답으로 반환해준다.
 * 모든 공약수가 조건을 만족하지 못한다면, 0을 반환한다.
 */
function findAnswer(cd, arr1, arr2) {
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;

  for (let i = 0, len = cd.length; i < len; i++) {
    const cntArr1 = arr1.filter((el) => isCD(el, cd[i])).length;
    const cntArr2 = arr2.filter((el) => isCD(el, cd[i])).length;

    if ((isEqual(cntArr1, arr1Len) && isEqual(cntArr2, 0)) || (isEqual(cntArr2, arr2Len) && isEqual(cntArr1, 0))) {
      return cd[i];
    }
  }

  return 0;
}

function isCD(num, divider) {
  return !(num % divider);
}

function isEqual(a, b) {
  return a === b;
}
