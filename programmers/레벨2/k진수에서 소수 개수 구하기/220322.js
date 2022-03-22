function solution(n, k) {
  const convertedNumber = n.toString(k);
  let answer = 0;

  const splitByZeroParts = convertedNumber.split('0');
  splitByZeroParts.forEach((part) => {
    if (isPrime(+part)) answer++;
  });

  return answer;
}

function isPrime(num) {
  if (typeof num !== 'number') return false;
  if (num < 2) return false;

  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
