function solution(cacheSize, cities) {
  const CACHE_MISS = 5;
  const CACHE_HIT = 1;
  if (cacheSize === 0) return cities.length * CACHE_MISS;

  const cache = [];

  function LRU(cache, name) {
    const pos = cache.indexOf(name);
    if (pos !== -1) {
      cache.push(...cache.splice(pos, 1));
      return CACHE_HIT;
    }
    if (cache.length === cacheSize) cache.shift();
    cache.push(name);
    return CACHE_MISS;
  }

  const runTime = cities.reduce(
    (acc, city) => (acc += LRU(cache, city.toLowerCase())),
    0
  );
  return runTime;
}
