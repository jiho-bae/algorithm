function solution(n, m) {
  let gcd;
  let lcm;

  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  lcm = (n * m) / gcd;

  return [gcd, lcm];
}
