function solution(citations) {
  citations.sort((a, b) => b - a);

  let index = 0;
  while (true) {
    if (index + 1 <= citations[index]) {
      index++;
    } else {
      return index;
    }
  }
}
