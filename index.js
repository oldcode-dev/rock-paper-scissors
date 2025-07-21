let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const decision = ["rock", "paper", "scissors"];

    const choice = decision[Math.floor(Math.random() * 3)];
    return choice;
}

function getHumanChoice() {
    let decision = prompt('Enter your decision').toLowerCase();
    return decision;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    let round = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log(`Round ${round + 1} Scores: computer ${computerScore} - human ${humanScore}`);
        round++;
    }
}

playGame();



