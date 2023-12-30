
alert('Please type "game()" for each round into console to play.')

let options = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection){
    
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose rock, paper, or scissors: ", "rock").toLowerCase();
    
    let result;
    let wrongInput = "No such choice. Try again!";
    
    if (computerSelection === "rock"){
        if (playerSelection === "rock"){
            result = "Tie!";
        } else if (playerSelection === "paper"){
            result = "Paper beats rock. You win!";
        } else if (playerSelection === "scissors"){
            result = "Rock beats scissors. You lose!";
        } else {
            return wrongInput;
        }
    }
    
    else if (computerSelection === "paper"){
        if (playerSelection === "rock"){
            result = "Paper beats rock. You lose!";
        } else if (playerSelection === "paper"){
            result = "Tie!";
        } else if (playerSelection === "scissors"){
            result = "Scissors beats paper. You win!";
        } else {
            return wrongInput;
        }
    }
    
    //"scissors"
    else {
        if (playerSelection === "rock"){
            result = "Rock beats scissors. You win!";
        } else if (playerSelection === "paper"){
            result = "Scissors beats paper. You lose!";
        } else if (playerSelection === "scissors"){
            result = "Tie!";
        } else {
            return wrongInput;
        }
    }

    let finalResult = `Computer selection was ${computerSelection}. ${result}`;

    if (playerSelection === "rock"
    || playerSelection === "paper"
    || playerSelection === "scissors"){
        return finalResult;
    } else {
        return wrongInput;
    }

}

let playerScore = 0;
let compScore = 0;

function game(){
    let gameResult = playRound();
    
    if (gameResult.includes("win")){
        playerScore += 1;
    } else if (gameResult.includes("lose")){
        compScore += 1;
    } else {}

    alert(`${gameResult} 
                    Player ${playerScore}:${compScore} Computer`);

    if (playerScore == 5){
        alert(`You win the game ${playerScore}:${compScore}!`);
    } else if (compScore == 5){
        alert(`Computer beats you ${compScore}:${playerScore}!`);
    } else {}
}
