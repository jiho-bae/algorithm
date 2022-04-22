const target = '1011010';
let conversionResult = 0;

function binaryToDecimal(binary) {
  let depth = 1;
  for (let i = binary.length - 1; i > -1; i--) {
    conversionResult += binary[i] * depth;
    depth *= 2;
  }
}

binaryToDecimal(target);

console.log('result : ', conversionResult);
