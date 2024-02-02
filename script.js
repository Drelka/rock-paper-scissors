const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const points = document.querySelector("#points");

let options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let compScore = 0;

rockBtn.addEventListener("click", () => {
    result.textContent = (playRound("rock"));
    if (x == "scissors") {
        playerScore += 1}
    else if (x == "paper") {
        compScore += 1}
    points.textContent = `${playerScore} : ${compScore}`;
});

paperBtn.addEventListener("click", () => {
    result.textContent = (playRound("paper"));
    if (x == "rock") {
        playerScore += 1}
    else if (x == "scissors") {
        compScore += 1}
    points.textContent = `${playerScore} : ${compScore}`;
});

scissorsBtn.addEventListener("click", () => {
    result.textContent = (playRound("scissors"));
    if (x == "paper") {
        playerScore += 1}
    else if (x == "rock") {
        compScore += 1}
    points.textContent = `${playerScore} : ${compScore}`;
});


function getComputerChoice(){
    return x = options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection){
    
    computerSelection = getComputerChoice();
    playerSelection;
    
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
    return finalResult;
}


