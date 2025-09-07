import { getComputerChoice, determineWinner} from './scripts/gameLogic.js';
import { updateScore, saveHighScore, getHighScore } from './scripts/scoreManager.js';
import { updateDOMAfterRound, appendToHistory } from './scripts/domHandler.js';

let score = { human: 0, computer: 0 };
let round = 0;
let gameActive = true;



document.getElementById('userOptions').addEventListener('click', (e) => {
  if (!gameActive) return;

  const humanChoice = e.target.id;
  if (!['rock', 'paper', 'scissors'].includes(humanChoice)) return;

  const computerChoice = getComputerChoice();
  const result = determineWinner(humanChoice, computerChoice);
  score = updateScore(result, score);
  // saveHighScore(score);
  document.querySelector(".user-highScore > span").textContent = getHighScore();
  updateDOMAfterRound(humanChoice, computerChoice, result, score);

  round++;
  console.log("round: ", round);
  appendToHistory(round, humanChoice, computerChoice, result);

  document.querySelector('#gameRounds > span').innerHTML = `<span>${round}</span>`;

  if (round > 4) {
    gameActive = false;
    document.querySelector('.winning').textContent = "Game Over!";
    if (document.querySelector('.winning').textContent === "Game Over!") {
      document.querySelector('.winning').classList.add("gameOver");
    }

    document.getElementById('userOptions').classList.add('disabled');

    document.querySelector("#resetBtn").style.cssText = "display: block";

    document.getElementById('resetBtn').addEventListener('click', () => {
      round = 0;
      gameActive = true;
      score = { human: 0, computer: 0 };

      document.querySelector('#gameRounds > span').textContent = round;
      document.getElementById('humanScore').querySelector('span').textContent = 0;
      document.getElementById('computerScore').querySelector('span').textContent = 0;
      document.getElementById('computerFinalScore').textContent = 0;
      document.getElementById('humanFinalScore').textContent = 0;
      document.querySelector('.winning').style.cssText = "display: none";
      document.getElementById('userOptions').classList.remove('disabled');
      document.querySelector("#resetBtn").style.cssText = "display: none";
      document.querySelector('.winning').classList.remove("gameOver");

      // Clear game history
      document.querySelectorAll('.historyWrapper div').forEach(div => {
        if (!div.querySelector('h4')) return;
        div.innerHTML = `<h4>${div.querySelector('h4').textContent}</h4>`;
      });
    });
  }


});