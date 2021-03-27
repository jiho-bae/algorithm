function solution(w, h) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  return w * h - (w + h - gcd(w, h));
}

// 최대공약수를 구하는 gcd 함수를 사용
