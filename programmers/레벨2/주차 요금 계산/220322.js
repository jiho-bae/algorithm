function solution(fees, records) {
  const IN = 'IN';
  const OUT = 'OUT';
  const parkingDashboard = {};
  const carParkingTime = {};

  const feeObj = {
    baseTime: fees[0],
    baseFee: fees[1],
    unitTime: fees[2],
    unitFee: fees[3],
  };

  function checkRecord(record) {
    const [time, carNumber, status] = record.split(' ');

    if (status === IN) {
      reportParkingTime(carNumber, time);
    } else if (status === OUT) {
      calculateParkingTime(carNumber, time);
    }
  }

  function reportParkingTime(carNumber, enterTime) {
    parkingDashboard[carNumber] = enterTime;
  }

  function calculateParkingTime(carNumber, getOutTime) {
    const enterTime = parkingDashboard[carNumber];
    const [enterHour, enterMinute] = enterTime.split(':');
    const [getOutHour, getOutMinute] = getOutTime.split(':');

    const wholeMinutes =
      (getOutHour - enterHour) * 60 + (getOutMinute - enterMinute);

    if (carParkingTime[carNumber]) {
      carParkingTime[carNumber] += wholeMinutes;
    } else {
      carParkingTime[carNumber] = wholeMinutes;
    }

    delete parkingDashboard[carNumber];
  }

  function calculateParkingFee(carNumber, parkingTime) {
    let result = 0;

    parkingTime -= feeObj.baseTime;
    result += feeObj.baseFee;
    if (parkingTime > 0) {
      const unitTimes = Math.ceil(parkingTime / feeObj.unitTime);
      result += unitTimes * feeObj.unitFee;
    }

    carParkingTime[carNumber] = result;
  }

  records.forEach((record) => checkRecord(record));

  Object.keys(parkingDashboard).forEach((carNumber) => {
    getOutParkingArea(carNumber, '23:59');
  });

  Object.entries(carParkingTime).forEach(([carNumber, parkingTime]) => {
    calculateParkingFee(carNumber, parkingTime);
  });

  const answer = Object.entries(carParkingTime)
    .sort((a, b) => a[0] - b[0])
    .map((arr) => arr[1]);
  return answer;
}
