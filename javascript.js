/*
0 = `Rock`
1 = `Paper`
2 = `Scissors`
*/
//getComputerChoice function
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return `rock`;
    } else if (choice == 1) {
        return `paper`;
    } else {
        return `scissors`;
    }
}

//getHumanChoice function
function getHumanChoice() {
    return prompt(
        `Type 'rock, 'paper', 'scissors' to play your turn`
    ).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        return `Draw :| the computer chose ${computerChoice}`;
    } else if (humanChoice == `rock` && computerChoice == `scissors`) {
        humanScore++;
        return `You won this round! the computer chose ${computerChoice}`;
    } else if (humanChoice == `scissors` && computerChoice == `paper`) {
        humanScore++;
        return `You won this round! the computer chose ${computerChoice}`;
    } else if (humanChoice == `paper` && computerChoice == `rock`) {
        humanScore++;
        return `You won this round! the computer chose ${computerChoice}`;
    } else {
        computerScore++;
        return `You lost this round! the computer chose ${computerChoice}`;
    }
}

function playGame(playRound) {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice, getHumanChoice));
    }
    if (humanScore > computerScore){
        return `You won!`
    }
    else if (humanScore < computerScore){
        return `You lost!`
    }
    else{
        return `Draw :|`
    }
}

console.log(playGame(playRound))
