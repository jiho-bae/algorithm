function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let time = 0;

  const cache = Array.from({ length: cacheSize }, () => 0);
  cities = cities.map((city) => city.toLowerCase());

  for (let c of cities) {
    const idx = cache.indexOf(c);
    if (idx === -1) {
      cache.pop();
      time += 5;
    } else {
      cache.splice(idx, 1);
      time += 1;
    }
    cache.unshift(c);
  }
  return time;
}
