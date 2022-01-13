function sol(line) {
  const suffix = [];
  const length = line.length;

  for (let i = 0; i < length; i++) {
    suffix.push(line.slice(i));
  }
  suffix.sort();

  return suffix.join('\n');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
