function solution(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      count++;
    } else if (str[i] === "y") {
      count--;
    }
  }

  return count === 0 ? true : false;
}
