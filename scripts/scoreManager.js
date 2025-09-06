export function updateScore(result, score) {
  if (result === 'win') score.human++;
  else if (result === 'loss') score.computer++;
  return score;
}

export function saveHighScore(score) {
  const currentHigh = parseInt(localStorage.getItem('highScore')) || 0;
  if (score.human > currentHigh) {
    localStorage.setItem('highScore', score.human);
  }
}

export function getHighScore() {
  return parseInt(localStorage.getItem('highScore')) || 0;
}