function solution(survey, choices) {
  var answer = '';

  const scores = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  function addScore(left, right, choice) {
    const score = Math.abs(choice - 4);

    if (choice < 4) {
      scores[left] += score;
    } else if (choice > 4) {
      scores[right] += score;
    }
  }

  function addPersonality(left, right) {
    const leftScore = scores[left];
    const rightScore = scores[right];

    return leftScore >= rightScore ? left : right;
  }

  choices.forEach((choice, idx) => {
    const [left, right] = survey[idx];
    addScore(left, right, choice);
  });

  answer += addPersonality('R', 'T');
  answer += addPersonality('C', 'F');
  answer += addPersonality('J', 'M');
  answer += addPersonality('A', 'N');

  return answer;
}
