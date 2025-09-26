function getComputerChoice() {
    // Randomize a number between 0-2, put it in "computerChoice"

    let computerChoice = Math.floor(Math.random() * 3);

    // assign rock, paper or scissors if it's 0, 1 or 2

    if (computerChoice === 0) {
        computerChoice = "rock"
    } else if (computerChoice === 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    console.log("computerChoice: " + computerChoice)

    return computerChoice;
} 

function getHumanChoice() {
    // return the result of a prompt the user to input rock, paper or scissors
    return prompt("Enter rock, paper or scissors");
}

const humanScore = 0
const computerScore = 0

function playRound(humanChoice, computerChoice) {

    // make humanChoice case insensitive
    humanChoice = humanChoice.toLowerCase()

    console.log("humanChoice: " + humanChoice)

    // compare humanChoice and computerChoice and determine who's the winnner. Log the winner in a parameter called winner.

    let winner = ""

    if (humanChoice === computerChoice) {
        winner = "draw"
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        winner = "human"
    } else {
        winner = "computer"
    }
    
    console.log("The winner is: " + winner)

    // if winner is human
        // write "you win, [humanChoice] beats [computerChoice]"
        // increment humanscore

    // otherwise
        // write "computer wins, [computerchoice] beats [humanchoice]"

        // increment computerscore

}

playRound(getHumanChoice(), getComputerChoice())