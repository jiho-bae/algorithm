function isPrime(num) {
  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
