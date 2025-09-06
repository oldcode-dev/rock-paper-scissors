export function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

export function determineWinner(human, computer) {
    if (human === computer) return 'draw';
    if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')
    ) return 'win';
    return 'loss';
}