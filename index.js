let humanScore = 0;
let computerScore = 0;

const decisions = [
  { choice: "rock", image: "./rps_game_images/rock.png", borderColor: "red" },
  { choice: "paper", image: "./rps_game_images/paper.png", borderColor: "blue" },
  { choice: "scissors", image: "./rps_game_images/scissors.png", borderColor: "green" }
];

const humanScoreContainer = document.querySelector("#humanScore span");
const computerScoreContainer = document.querySelector("#computerScore span");
const gameRoundsContainer = document.querySelector(".gameRounds span");
const computerFinalScoreContainer = document.querySelector("#computerFinalScore");
const humanFinalScoreContainer = document.querySelector("#humanFinalScore");
const humanMotivationContainer = document.querySelector(".winning");
const computerChoiceContainer = document.querySelector(".computerChoice img");
const humanChoiceContainer = document.querySelector(".userChoice img");
const humanMovesContainer = document.querySelectorAll("#userOptions .choice img");

// Utility to render choice visuals
function renderChoice(container, choice, borderColor) {
  container.src = `./rps_game_images/${choice}.png`;
  container.style.border = `5px solid ${borderColor}`;
}

// Random computer decision
function getComputerChoice() {
  return decisions[Math.floor(Math.random() * decisions.length)];
}

// Main game logic
function playRound(humanChoice, computerChoice) {
  console.log("Human:", humanChoice, "| Computer:", computerChoice.choice);
  renderChoice(computerChoiceContainer, computerChoice.choice, computerChoice.borderColor);
  // Add scoring logic here if needed
}

// Setup event listeners once
function setupHumanMoves() {
  humanMovesContainer.forEach(move => {
    move.addEventListener("click", () => {
      const choice = move.id;
      const borderColor = move.dataset.color;
      renderChoice(humanChoiceContainer, choice, borderColor);

      const computerChoice = getComputerChoice();
      playRound(choice, computerChoice);
    });
  });
}

// Initialize game
function initGame() {
  setupHumanMoves();
}

initGame();