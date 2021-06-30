function solution(numbers) {
  function f(x) {
    if (x % 2 === 0) return x + 1;
    const bit = x.toString(2);
    let idx = 0;
    let len;
    while (true) {
      len = 0;
      idx++;
      let nextBit = (x + idx).toString(2);
      const diff = nextBit.length - bit.length;
      len +=
        diff +
        nextBit
          .slice(diff)
          .split("")
          .filter((b, i) => b !== bit[i]).length;
      if (len <= 2) return x + idx;
    }
  }
  const answer = [];
  for (let number of numbers) answer.push(f(number));
  return answer;
}
