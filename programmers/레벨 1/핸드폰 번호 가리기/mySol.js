function solution(phone_number) {
  return [...phone_number]
    .map((value, index) => {
      if (index >= phone_number.length - 4) return value;
      return "*";
    })
    .join("");
}
