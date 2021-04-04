function solution(nums) {
  const arr = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  return arr.filter((value) => {
    if (value === 2) return true;
    for (let i = 2; i < value; i++) {
      if (value % i === 0) return false;
    }
    return true;
  }).length;
}
