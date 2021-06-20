function solution(n) {
  const fibo = (function () {
    const cache = {
      0: 0,
      1: 1,
    };
    const func = function (n) {
      let result = 0;
      if (typeof cache[n] === "number") result = cache[n] % 1234567;
      else result = cache[n] = (func(n - 1) + func(n - 2)) % 1234567;
      return result;
    };
    return func;
  })();
  return fibo(n);
}
