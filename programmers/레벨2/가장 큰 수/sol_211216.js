function solution(numbers) {
  if (numbers[0] === 0 && new Set(numbers).size === 1) return '0';
  return numbers
    .map(String)
    .sort((a, b) => `${b}${a}` - `${a}${b}`)
    .join('');
}
