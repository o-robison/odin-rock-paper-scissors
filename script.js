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

