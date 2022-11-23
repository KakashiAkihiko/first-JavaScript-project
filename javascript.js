
// Returns random number, even distribution between 1-3 including
function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(3);
    switch (Math.floor(Math.random() * (max - min + 1)) + min){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        
        default:
            return "spock";
            break;
    }
}

// Test of computer choice
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

// Returns the winner of the game
function playRound(playerChoice, ComputerChoice){
    if (playerChoice === ComputerChoice){
        return "TIE! No one";
    } else if (playerChoice === "rock" && ComputerChoice === "scissors"){
        return "Player";
    } else if (playerChoice === "paper" && ComputerChoice === "rock"){
        return "Player";
    } else if (playerChoice === "scissors" && ComputerChoice === "paper"){
        return "Player";
    } else {
        return "Computer";
    }
}

console.log(playRound("rock", getComputerChoice()));