export function updateDOMAfterRound(human, computer, result, score) {
  document.getElementById('humanScore').querySelector('span').textContent = score.human;
  document.getElementById('computerScore').querySelector('span').textContent = score.computer;
  document.getElementById('computerChoice').src = `./assets/images/${computer}.png`;
  document.getElementById('humanChoice').src = `./assets/images/${human}.png`;
  document.getElementById('computerFinalScore').textContent = score.computer;
  document.getElementById('humanFinalScore').textContent = score.human;

  document.querySelector('.winning').style.cssText = "display: block";
  const resultText = document.querySelector('.winning');
  resultText.textContent = result === 'win' ? "You're winning!" : result === 'loss' ? "You're losing!" : "It's a draw!";
}

export function appendToHistory(round, humanChoice, computerChoice, result) {
  document.querySelector('.roundsHistory').innerHTML += `<p>${round}</p>`;
  document.querySelector('.result').innerHTML += `<p class="${result === 'win' ? 'winning' : 'loosing'}">${result}</p>`;
  document.querySelector('#finalHumanChoice').innerHTML += `<p>${humanChoice}</p>`;
  document.querySelector('#finalComputerChoice').innerHTML += `<p>${computerChoice}</p>`;
}