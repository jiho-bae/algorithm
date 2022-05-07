function solution(n, k) {
  const convertedN = n.toString(k);
  const splittedByZero = convertedN.split('0');
  let answer = 0;

  function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2, sqrtN = Math.sqrt(num); i <= sqrtN; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  answer += splittedByZero.filter((strNum) => isPrime(+strNum)).length;
  return answer;
}
