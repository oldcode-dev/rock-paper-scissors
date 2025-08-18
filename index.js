let humanScore = 0;
let computerScore = 0;

const decisions = [
    { choice: "rock", image: "./rps Game Images/rock.png" },
    { choice: "paper", image: "./rps Game Images/paper.png" },
    { choice: "scissors", image: "./rps Game Images/scissors.png" }
];

const userOptions = document.querySelectorAll('#user-options .rps-icon');

const humanChoice = document.querySelector(".humanChoice");
const computerChoice = document.getElementById('computerChoice');
const roundContainer = document.querySelector(".gameRounds > span");
const humanScoreContainer = document.querySelector("#humanScore > span");
const computerScoreContainer = document.querySelector("#computerScore > span");

function getComputerChoice() {
    // Pick a random decision
    const { choice, image } = decisions[Math.floor(Math.random() * decisions.length)];

    // Update image and class
    computerChoice.src = image;
    computerChoice.className = choice; // replaces all classes with the new one

    return choice;
}

function getHumanChoice() {
    const userOptions = document.querySelectorAll('#user-options .rps-icon');

    userOptions.forEach(option => {
        option.addEventListener('click', () => {
            const userChoice = option.getAttribute('data-choice');
            // Update image and class
            humanChoice.src = `./rps Game Images/${userChoice}.png`;
            humanChoice.className = userChoice;

            getComputerChoice();
            
        });
    });
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
        humanScoreContainer.textContent = humanScore;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        computerScoreContainer.textContent = computerScore;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    playRound()
}





