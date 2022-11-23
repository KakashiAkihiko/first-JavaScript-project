
// Returns random number, even distribution between 1-3 including
function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(3);
    switch (Math.floor(Math.random() * (max - min + 1)) + min) {
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

// Returns the winner of the game
function playRound(playerChoice, ComputerChoice) {
    if (playerChoice === ComputerChoice) {
        return "TIE! No one";
    } else if (playerChoice === "rock" && ComputerChoice === "scissors") {
        return "Player";
    } else if (playerChoice === "paper" && ComputerChoice === "rock") {
        return "Player";
    } else if (playerChoice === "scissors" && ComputerChoice === "paper") {
        return "Player";
    } else {
        return "Computer";
    }
}


// Runs a game - get player input, check if valid, compare to computer to determine winner, increment winner score and repeat.
function game() {
    let playerChoice = "none";

    //Prompt the player for inputer and put it to lower case
    playerChoice = (prompt("Please enter \"Rock, Paper or Scissors\"")).toLowerCase();

    //Check if user input is correct, otherwise prompt again
    while(playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"){
        playerChoice = (prompt("You suck... Enter: \"Rock, Paper or Scissors\"")).toLowerCase();
    }

    switch (playRound(playerChoice, getComputerChoice())){
        case "Player":
            playerWins++;
            console.log("The Player wins!");
            break;
        case "Computer":
            computerWins++;
            console.log("The Computer wins!");
            break;
        case "TIE! No one":
            console.log("Tie! No one wins");
    }

}

//Play 5 games
let playerWins = 0;
let computerWins = 0;

for(let i=0; i<5; i++){
    game();
    console.log("The current score is: Player " + playerWins + " || Computer " + computerWins);
}