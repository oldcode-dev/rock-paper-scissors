export function updateDOMAfterRound(human, computer, result, score) {
  document.getElementById('humanScore').querySelector('span').textContent = score.human;
  document.getElementById('computerScore').querySelector('span').textContent = score.computer;
  document.getElementById('computerChoice').src = `./rps_game_images/${computer}.png`;

  const resultText = document.querySelector('.winning');
  resultText.textContent = result === 'win' ? "You're winning!" : result === 'loss' ? "You're losing!" : "It's a draw!";
}

export function appendToHistory(round, human, computer, result) {
  document.querySelector('.roundsHistory').innerHTML += `<p>${round}</p>`;
  document.querySelector('.humanChoice').innerHTML += `<p>${human}</p>`;
  document.querySelector('.computerChoice').innerHTML += `<p>${computer}</p>`;
  document.querySelector('.result').innerHTML += `<p class="${result === 'win' ? 'winning' : 'loosing'}">${result}</p>`;
}