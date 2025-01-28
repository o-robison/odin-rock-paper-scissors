var humanScore = 0;
var computerScore = 0;

function getComputerChoice () {
    //returns rock, paper, or scissors, randomly
    var i = parseInt((Math.random() * 100) % 3);
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
    var choice = prompt("Rock, paper, or scissors?");
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
    console.log(`It's a tie! ${humanChoice} and ${computerChoice} are the same.`);
    return;
}

function computerWins (humanChoice, computerChoice) {
    console.log(`You lose :( ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    return;
}

function humanWins (humanChoice, computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    return;
}