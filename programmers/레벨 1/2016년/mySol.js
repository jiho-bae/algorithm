function solution(a, b) {
  const dayOfaWeek = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const daysOfaMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sumOfDays = 0;

  for (let i = 0; i < a - 1; i++) {
    sumOfDays += daysOfaMonth[i];
  }
  sumOfDays += b;

  return dayOfaWeek[sumOfDays % 7];
}
