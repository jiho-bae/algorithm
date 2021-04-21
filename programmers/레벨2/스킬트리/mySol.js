function solution(skill, skill_trees) {
  let cnt = 0;

  skill_trees.forEach((skill_tree) => {
    let idx = 0,
      flag = 1;
    for (let st = 0; st < skill_tree.length; st++) {
      const findIndex = skill.indexOf(skill_tree[st]);
      if (findIndex === -1) continue;
      if (findIndex !== idx) {
        flag = 0;
        break;
      } else {
        idx++;
      }
    }
    if (flag) cnt++;
  });
  return cnt;
}
