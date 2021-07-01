function sol(input) {
  const [month, day] = input.split(" ").map(Number);
  const dayOfAWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let sum = days.slice(0, month).reduce((s, v) => s + v, 0);
  sum += day - 1;
  return dayOfAWeek[sum % 7];
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
