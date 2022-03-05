function sol(input) {
  const students = input.slice(1).map((str) => {
    const [name, korean, eng, math] = str.split(' ');
    return [name, +korean, +eng, +math];
  });

  students.sort((a, b) => {
    if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
      return a[0].charCodeAt() - b[0].charCodeAt();
    } else if (a[1] === b[1] && a[2] === b[2]) {
      return b[3] - a[3];
    } else if (a[1] === b[1]) {
      return a[2] - b[2];
    } else return b[1] - a[1];
  });

  return students.map((std) => std[0]).join('\n');
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
