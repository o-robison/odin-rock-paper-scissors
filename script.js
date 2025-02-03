let humanScore = 0;
let computerScore = 0;

const display = document.querySelector("#display");
const humanScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

function updateScores(){
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    return;
}

function getComputerChoice () {
    //returns rock, paper, or scissors, randomly
    let i = parseInt((Math.random() * 100) % 3);
    switch (i){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice () {
    let choice = prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase();
    return choice;
}

function playRound (humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    tie(humanChoice, computerChoice);
                    break;
                case "paper":
                    computerWins(humanChoice, computerChoice);
                    break;
                case "scissors":
                    humanWins(humanChoice, computerChoice);
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanWins(humanChoice, computerChoice);
                    break;
                case "paper":
                    tie(humanChoice, computerChoice);
                    break;
                case "scissors":
                    computerWins(humanChoice, computerChoice);
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerWins(humanChoice, computerChoice);
                    break;
                case "paper":
                    humanWins(humanChoice, computerChoice);
                    break;
                case "scissors":
                    tie(humanChoice, computerChoice);
                    break;
            }
            break;
    }
    return;
}

function tie (humanChoice, computerChoice) {
    const newPara = document.createElement("p");
    newPara.textContent = `It's a tie! ${humanChoice} and ${computerChoice} are the same.`;
    display.appendChild(newPara);
    return;
}

function computerWins (humanChoice, computerChoice) {
    const newPara = document.createElement("p");
    newPara.textContent = `You lose :( ${computerChoice} beats ${humanChoice}`;
    display.appendChild(newPara);
    computerScore++;
    updateScores();
    return;
}

function humanWins (humanChoice, computerChoice) {
    const newPara = document.createElement("p");
    newPara.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    display.appendChild(newPara);
    humanScore++;
    updateScores();
    return;
}

function playGame (e) {
    switch(e.target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
    if (computerScore>4 || humanScore>4) {
        const newPara = document.createElement("p");
        if(computerScore>4) newPara.textContent = "Computer wins!";
        else newPara.textContent = "You win!";
        display.appendChild(newPara);
    }
}

const buttonBar = document.querySelector("#buttonBar");
buttonBar.addEventListener("click", playGame);
