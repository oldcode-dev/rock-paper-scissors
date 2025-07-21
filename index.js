function getComputerChoice(){
    const decision = ["rock", "paper", "scissors"];

    const choice = decision[Math.floor(Math.random() * 3)];
    return choice;
}

getComputerChoice();

