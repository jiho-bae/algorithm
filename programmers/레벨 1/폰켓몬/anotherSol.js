function solution(nums) {
  const numberOfNums = new Set();
  nums.forEach((num) => numberOfNums.add(num));

  return Math.min(numberOfNums.size, nums.length / 2);
}
