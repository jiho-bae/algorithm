function solution(genres, plays) {
  let answer = [];
  const genreHash = new Map();
  const playHash = new Map();
  const len = plays.length;

  for (let index = 0; index < len; index++) {
    const gen = genres[index];
    const play = plays[index];
    if (genreHash.has(gen)) {
      genreHash.set(gen, genreHash.get(gen) + play);
      playHash.set(gen, [...playHash.get(gen), { index, play }]);
    } else {
      genreHash.set(gen, play);
      playHash.set(gen, [{ index, play }]);
    }
  }
  const sortedGenreHash = Array.from(genreHash).sort((a, b) => b[1] - a[1]);

  sortedGenreHash.forEach((gen) => {
    let target = playHash.get(gen[0]);
    target.sort((a, b) => b.play - a.play);
    for (let i = 0; i < 2; i++) {
      answer.push(target[i].index);
    }
  });
  return answer;
}
