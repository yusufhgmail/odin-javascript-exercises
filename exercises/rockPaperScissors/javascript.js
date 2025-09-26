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


function playGame() {

    let humanScore = 0
    let computerScore = 0

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

        if (winner === "human") {
            console.log("you win, " + humanChoice + " beats " + computerChoice)
            humanScore++


        // if computer wins
            // write "computer wins, [computerchoice] beats [humanchoice]"
            // increment computerscore

        } else if (winner === "computer") {
            console.log("you lose, " + computerChoice + " beats " + humanChoice)
            computerScore++

        // otherwise console log a draw

        } else {
            console.log("Draw!! Play again.")
        }

    }

    // Initialize rounds var to 0

    let round = 1

    // write message "Game starting!"
    console.log("======================")
    console.log("GAME STARTING!! ARE YOU READY??? LET'S WIN THIS BABY!")

    // Loop 5 times
    while (round <= 5) {
        
        // round++ and write a new line ("============") and then "round number: [round]"
        console.log("--- ROUND NUMBER: " + round + " ---")

        //playround()
        playRound(getHumanChoice(), getComputerChoice())

        // "current scores: ..."
        console.log("CURRENT SCORES AFTER ROUND:")
        console.log("Computer: " + computerScore)
        console.log("Human: " + humanScore)
        round++

    }

    console.log("")

    // compare computerScore with humanScore and output the winner.
    if (humanScore > computerScore) {
        console.log("HUMAN WON! :)")
    } else if (humanScore < computerScore) {
        console.log("COMPUTER WON :(")
    } else {
        console.log("IT WAS A DRAW!!??!")
    }

}

playGame()
