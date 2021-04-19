function solution(bridge_length, weight, truck_weights) {
  const truckQueue = [];
  let timeQueue = [];
  let cnt = 0;
  let weightSum = 0;

  while (true) {
    if (weightSum + truck_weights[0] <= weight) {
      const tWeight = truck_weights.shift();
      truckQueue.push(tWeight);
      weightSum += tWeight;
      timeQueue.push(0);
    }
    timeQueue = timeQueue.map((time) => time + 1);
    cnt++;
    if (timeQueue[0] === bridge_length) {
      weightSum -= truckQueue.shift();
      timeQueue.shift();
      if (truck_weights.length === 0 && timeQueue.length === 0) break;
    }
  }
  return cnt + 1;
}

//2. 정리
function solution(bridge_length, weight, truck_weights) {
  const queue = [];
  let totalTime = 0;
  let weightSum = 0;

  while (truck_weights.length !== 0 && queue.length !== 0) {
    if (weightSum + truck_weights[0] <= weight) {
      const tWeight = truck_weights.shift();
      queue.push([tWeight, 0]);
      weightSum += tWeight;
    }
    queue = queue.map(([w, t]) => [w, t + 1]);
    console.log(queue);
    totalTime++;
    if (queue[0][1] === bridge_length) {
      weightSum -= queue.shift()[0];
    }
  }
  return totalTime + 1;
}
