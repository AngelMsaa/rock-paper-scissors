
let humanScore = 0;
let computerScore = 0;

const selectionButtons = document.querySelectorAll("#selectionButtons button");
const humanScoreSpan = document.querySelector("#humanScore");
const computerScoreSpan = document.querySelector("#computerScore");
const winnerText = document.querySelector("#winner");

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let roundWinner = determineRoundWinner(humanChoice, computerChoice);

    if (roundWinner == "draw") {
        console.log("Draw!");
    } else if (roundWinner == "human") {
        console.log(`${humanChoice} beats ${computerChoice}. Human wins!`);
        humanScore++;
        humanScoreSpan.textContent = humanScore;
    } else {
        console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }

    if (humanScore == 5 || computerScore == 5) {
        winnerText.textContent = determineGameWinner(humanScore, computerScore);
        winnerText.style.color = "green";
        selectionButtons[0].parentNode.remove();
    }
}
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];

    return options.at(Math.random() * 3 | 0);
}
function determineRoundWinner(humanChoice, computerChoice) {
    if (humanChoice == "rock" ) {
        if (computerChoice == "rock") {
            return "draw";
        }
        if (computerChoice == "paper") {
            return "human";
        }
        if (computerChoice == "scissors") {
            return "computer";
        }
    }
    if (humanChoice == "paper" ) {
        if (computerChoice == "rock") {
            return "human";
        }
        if (computerChoice == "paper") {
            return "draw";
        }
        if (computerChoice == "scissors") {
            return "computer";
        }
    }
    if (humanChoice == "scissors" ) {
        if (computerChoice == "rock") {
            return "computer";
        }
        if (computerChoice == "paper") {
            return "human";
        }
        if (computerChoice == "scissors") {
            return "draw";
        }
    }
    }
const determineGameWinner = (humanScore, computerScore) => {
    if (humanScore > computerScore) {
        return 'Human wins!';
    } else if (humanScore < computerScore) {
        return 'Computer wins!';
    } else {
        return 'It\'s a draw!';
    }
}
selectionButtons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
    })}
);

