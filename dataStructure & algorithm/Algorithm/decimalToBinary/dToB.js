const target = 250;

let conversionResult = '';

let iteration = 0;

function decimalTobinary(decimal) {
  if (decimal < 2) {
    conversionResult += decimal;
    return;
  } else {
    decimalTobinary(Math.floor(decimal / 2));
    decimalTobinary(decimal % 2);
    iteration++;
  }
}

decimalTobinary(target);

console.log('iter : ', iteration, 'result : ', conversionResult);
