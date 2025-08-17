let humanScore = 0;
let computerScore = 0;

const choiceRock = document.querySelector(".rock");
const choicePaper = document.querySelector(".paper");
const choiceScissors = document.querySelector(".scissors");

const humanChoice = document.querySelector(".humanChoice");
const computerChoice = document.getElementById('computerChoice');


const roundContainer = document.querySelector(".gameRounds > span");

function getComputerChoice() {
    const decisions = [
        { choice: "rock", image: "./rps Game Images/rock.png" },
        { choice: "paper", image: "./rps Game Images/paper.png" },
        { choice: "scissors", image: "./rps Game Images/scissors.png" }
    ];

    // Pick a random decision
    const { choice, image } = decisions[Math.floor(Math.random() * decisions.length)];

    // Update image and class
    computerChoice.src = image;
    computerChoice.className = choice; // replaces all classes with the new one

    return choice;
}

function getHumanChoice() {


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

// function playGame() {
//     let round = 0;

//     for (let i = 0; i < 5; i++) {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();

//         const result = playRound(humanChoice, computerChoice);
//         console.log(result);
//         console.log(`Round ${round + 1} Scores: computer ${computerScore} - human ${humanScore}`);
//         round++;
//     }
// }

// playGame();



