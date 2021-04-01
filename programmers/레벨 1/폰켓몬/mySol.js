function solution(nums) {
  let numberOfNums = {};
  nums.forEach((num) => {
    if (numberOfNums[num] !== undefined) {
      numberOfNums[num] += 1;
    } else {
      numberOfNums[num] = 1;
    }
  });

  return Math.min(nums.length / 2, Object.keys(numberOfNums).length);
}
