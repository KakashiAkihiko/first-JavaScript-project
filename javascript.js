
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