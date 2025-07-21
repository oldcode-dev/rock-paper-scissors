let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const decision = ["rock", "paper", "scissors"];

    const choice = decision[Math.floor(Math.random() * 3)];
    return choice;
}

function getHumanChoice(){
    let decision = prompt('Enter your decision');
    return decision;
}

