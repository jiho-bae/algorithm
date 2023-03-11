function solution(wallpaper) {
  const xArrays = [];
  const yArrays = [];
  const target = '#';

  wallpaper.forEach((row, xIdx) => {
    [...row].forEach((cell, yIdx) => {
      if (cell === target) {
        xArrays.push(xIdx);
        yArrays.push(yIdx);
      }
    });
  });

  xArrays.sort((a, b) => a - b);
  yArrays.sort((a, b) => a - b);

  return [xArrays[0], yArrays[0], xArrays.pop() + 1, yArrays.pop() + 1];
}
