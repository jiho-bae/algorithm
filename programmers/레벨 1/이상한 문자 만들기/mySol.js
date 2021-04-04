function solution(s) {
  const arr = s.split(" ");

  return arr
    .map((value) => {
      let str = "";
      for (let i = 0; i < value.length; i++) {
        if (i % 2 === 0) {
          str += value[i].toUpperCase();
        } else {
          str += value[i].toLowerCase();
        }
      }
      return str;
    })
    .join(" ");
}
