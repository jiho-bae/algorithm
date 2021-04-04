function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
    } else {
      let ascii = s[i].charCodeAt() + n;
      if (
        (ascii - n <= 122 && ascii > 122) ||
        (ascii - n <= 90 && ascii > 90)
      ) {
        ascii = ascii - 26;
      }

      answer += String.fromCharCode(ascii);
    }
  }
  return answer;
}
