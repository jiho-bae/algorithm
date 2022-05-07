function solution(fees, records) {
  const carTimes = {};
  const parkingIO = {};
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  const IN = 'IN';
  const OUT = 'OUT';
  const lastTime = getMinutesFromStr('23:59');

  records.forEach((record) => {
    const [timeStr, carNumber, IO] = record.split(' ');
    const minutes = getMinutesFromStr(timeStr);

    if (IO === IN) {
      parkingIO[carNumber] = minutes;
    } else if (IO === OUT) {
      const enterTime = parkingIO[carNumber];
      delete parkingIO[carNumber];
      const useTime = minutes - enterTime;

      if (!carTimes.hasOwnProperty(carNumber)) {
        carTimes[carNumber] = useTime;
      } else {
        carTimes[carNumber] += useTime;
      }
    }
  });

  Object.entries(parkingIO).forEach(([carNumber, enterTime]) => {
    const useTime = lastTime - enterTime;
    if (!carTimes.hasOwnProperty(carNumber)) {
      carTimes[carNumber] = useTime;
    } else {
      carTimes[carNumber] += useTime;
    }
  });

  const sortedCarTimes = Object.entries(carTimes).sort((a, b) => a[0] - b[0]);
  const answer = sortedCarTimes.map(([_, wholeTime]) => getUsageFee(wholeTime));

  return answer;

  function getMinutesFromStr(timeStr) {
    const [hour, minutes] = timeStr.split(':').map(Number);
    return hour * 60 + minutes;
  }

  function getUsageFee(time) {
    if (time <= baseTime) return baseFee;

    const overTime = time - baseTime;
    const overUnit = Math.ceil(overTime / unitTime);
    const overFee = overUnit * unitFee;
    return baseFee + overFee;
  }
}
