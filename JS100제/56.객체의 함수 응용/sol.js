const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const solution = (nWidth) => {
  const korea = nWidth["korea"];

  delete nWidth["korea"];

  const entry = Object.entries(nWidth);
  let item;
  let diff = Number.MAX_SAFE_INTEGER;

  for (let x of entry) {
    if (diff > Math.abs(x[1] - korea)) {
      diff = Math.abs(x[1] - korea);
      item = x[0];
    }
  }

  return [item, diff];
};
solution(nationWidth);
