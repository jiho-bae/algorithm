function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      const first = word.slice(0, 1).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return first + rest;
    })
    .join(' ');
}
