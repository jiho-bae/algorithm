function solution(skill, skillTrees) {
  return skillTrees.filter((skillTree) => {
    let cursor = 0;

    for (let st of skillTree) {
      const idx = skill.indexOf(st);
      if (idx < 0) continue;
      if (idx !== cursor) return false;
      cursor++;
    }
    return true;
  }).length;
}
