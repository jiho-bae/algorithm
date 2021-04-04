function solution(s, n) {
  return [...s]
    .map((value) => {
      if (value === " ") {
        return value;
      }
      let pushedS = value.charCodeAt() + n;
      if (
        (pushedS - n <= 90 && pushedS > 90) ||
        (pushedS - n <= 122 && pushedS > 122)
      ) {
        pushedS -= 26;
      }

      return String.fromCharCode(pushedS);
    })
    .join("");
}
