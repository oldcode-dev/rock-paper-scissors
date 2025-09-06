import { getComputerChoice, determineWinner } from './js/gameLogic.js';
import { updateScore, saveHighScore, getHighScore } from './js/scoreManager.js';
import { updateDOMAfterRound, appendToHistory } from './js/domHandler.js';

let score = { human: 0, computer: 0 };
let round = 1;

document.getElementById('userOptions').addEventListener('click', (e) => {
  const humanChoice = e.target.id;
  if (!['rock', 'paper', 'scissors'].includes(humanChoice)) return;

  const computerChoice = getComputerChoice();
  const result = determineWinner(humanChoice, computerChoice);
  score = updateScore(result, score);
  saveHighScore(score);
  updateDOMAfterRound(humanChoice, computerChoice, result, score);
  appendToHistory(round++, humanChoice, computerChoice, result);
});