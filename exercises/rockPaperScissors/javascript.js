function getComputerChoice() {
	// Randomize a number between 0-2, put it in "computerChoice"

	let computerChoice = Math.floor(Math.random() * 3);

	// assign rock, paper or scissors if it's 0, 1 or 2

	if (computerChoice === 0) {
		computerChoice = "rock";
	} else if (computerChoice === 1) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}

	resultsP.textContent += `computerChoice: ${computerChoice}`;

	return computerChoice;
}

function getHumanChoice() {
	// return the result of a prompt the user to input rock, paper or scissors
	return prompt("Enter rock, paper or scissors");
}

const resultsP = document.querySelector("#resultsP");

function playRound(humanChoice, computerChoice) {
	// make humanChoice case insensitive
	humanChoice = humanChoice.toLowerCase();

	resultsP.textContent += `humanChoice: ${humanChoice}`;

	// compare humanChoice and computerChoice and determine who's the winnner. Log the winner in a parameter called winner.

	let winner = "";

	if (humanChoice === computerChoice) {
		winner = "draw";
	} else if (
		(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		winner = "human";
	} else {
		winner = "computer";
	}

	return winner;
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function scoreIncrement(winner) {
		resultsP.textContent += `The winner is: ${winner}`;

		if (winner === "human") {
			resultsP.textContent += `you win, ${humanChoice} beats ${computerChoice}`;

			humanScore++;
		} else if (winner === "computer") {
			resultsP.textContent += `you lose, ${computerChoice} beats ${humanChoice}`;

			computerScore++;
		} else {
			resultsP.textContent += "Draw! Play again.";
		}
	}

	resultsP.textContent = "New game waiting to be played :)";

	// Initialize rounds var to 0

	let round = 1;

	// write message "Game starting!"
	resultsP.textContent = "======================";
	resultsP.textContent +=
		"GAME STARTING!! ARE YOU READY??? LET'S WIN THIS BABY!";

	// Loop 5 times
	while (round <= 5) {
		// round++ and write a new line ("============") and then "round number: [round]"
		resultsP.textContent += "--- ROUND NUMBER: " + round + " ---";

		//playround()
		let winner = playRound(getHumanChoice(), getComputerChoice());
		scoreIncrement(winner);

		// "current scores: ..."
		resultsP.textContent += "CURRENT SCORES AFTER ROUND:";
		resultsP.textContent += `Computer: ${computerScore}`;
		resultsP.textContent += `Human: ${humanScore}`;

		round++;
	}

	// compare computerScore with humanScore and output the winner.
	if (humanScore > computerScore) {
		resultsP.textContent += "HUMAN WON! :)";
	} else if (humanScore < computerScore) {
		resultsP.textContent += "COMPUTER WON :(";
	} else {
		resultsP.textContent += "IT WAS A DRAW!!??!";
	}
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (e) => playRound("rock", getComputerChoice()));
paper.addEventListener("click", (e) => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", (e) =>
	playRound("scissors", getComputerChoice())
);
