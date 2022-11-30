


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
    while (playerChoice !== "rock" &&
        playerChoice !== "paper" &&
        playerChoice !== "scissors") {
        playerChoice = (prompt("You suck... Enter: \"Rock, Paper or Scissors\"")).toLowerCase();
    }

    switch (playRound(playerChoice, getComputerChoice())) {
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

let playerWins = 0;
let computerWins = 0;

//event listener for clicks on button
//Create const object for buttons
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        switch (button.id) {
            case "rock":
                return console.log(playRound(button.id, getComputerChoice()));
            case "paper":
                return console.log(playRound(button.id, getComputerChoice()));
            case "scissors":
                return console.log(playRound(button.id, getComputerChoice()));
        }
    });
});