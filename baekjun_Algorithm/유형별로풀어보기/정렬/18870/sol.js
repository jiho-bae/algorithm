function sol(input) {
  const coords = input[1].split(' ');
  const coordsSet = [...new Set(coords)].sort((a, b) => a - b);
  const coordsObj = {};
  coordsSet.forEach((coord, i) => (coordsObj[coord] = i));

  return coords.map((coord) => coordsObj[coord]).join(' ');
}

const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
