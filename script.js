const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const points = document.querySelector("#points");
const endOfGame = document.querySelector("#endOfGame");
const resetBtn = document.querySelector("#resetButton");
const buttons3 = document.querySelectorAll(".btn");

let options = ['rock', 'paper', 'scissors'];

function countPoints() {
    points.textContent = `${playerScore} : ${compScore}`;
}

let playerScore = 0;
let compScore = 0;
countPoints();
result.textContent = "Choose rock, paper or scissors.";

rockBtn.addEventListener("click", () => {
    result.textContent = (playRound("rock"));
    if (compChoice == "scissors") {
        playerScore += 1}
    else if (compChoice == "paper") {
        compScore += 1}
    countPoints();
    endGame();
});

paperBtn.addEventListener("click", () => {
    result.textContent = (playRound("paper"));
    if (compChoice == "rock") {
        playerScore += 1}
    else if (compChoice == "scissors") {
        compScore += 1}
    countPoints();
    endGame();
});

scissorsBtn.addEventListener("click", () => {
    result.textContent = (playRound("scissors"));
    if (compChoice == "paper") {
        playerScore += 1}
    else if (compChoice == "rock") {
        compScore += 1}
    countPoints();
    endGame();
});


function getComputerChoice(){
    return compChoice = options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection){
    
    computerSelection = getComputerChoice();
    playerSelection;
    
    let result;
    
    if (computerSelection === "rock"){
        if (playerSelection === "rock"){
            result = "Tie!";
        } else if (playerSelection === "paper"){
            result = "Paper beats rock. You win!";
        } else {
            result = "Rock beats scissors. You lose!";
        }
    }
    
    else if (computerSelection === "paper"){
        if (playerSelection === "rock"){
            result = "Paper beats rock. You lose!";
        } else if (playerSelection === "paper"){
            result = "Tie!";
        } else {
            result = "Scissors beats paper. You win!";
        }
    }
    
    else {
        if (playerSelection === "rock"){
            result = "Rock beats scissors. You win!";
        } else if (playerSelection === "paper"){
            result = "Scissors beats paper. You lose!";
        } else {
            result = "Tie!";
        }
    }

    let finalResult = `Computer selection was ${computerSelection}. ${result}`;
    return finalResult;
}

function endGame(){
    if(playerScore == 5 || compScore == 5) {
        btn = document.createElement("button");
        if (playerScore == 5) {
            if((playerScore - compScore) > 1) {
                let x = playerScore - compScore;
                endOfGame.textContent = `YOU WON THE GAME BY ${x} POINTS!`;
            } else {
                endOfGame.textContent = "YOU WIN THE GAME BY 1 POINT!";
            }
        } else {
            if((compScore - playerScore) > 1 ){
                let x = compScore - playerScore;
                endOfGame.textContent = `COMPUTER BEATS YOU BY ${x} POINTS!`;
            } else {
                endOfGame.textContent = "COMPUTER BEATS YOU BY 1 POINT!";
            }
        }
        resetBtn.appendChild(btn);
        buttons3.forEach(button => {
            button.disabled = true;
        });
        
        btn.style.cssText = "padding: 10px; font-size: 20px; margin-top: 50px";
        btn.textContent = "Play Again";
        btn.addEventListener("click", () => {
            playerScore = 0;
            compScore = 0;
            countPoints();
            result.textContent = "Choose rock, paper or scissors.";
            endOfGame.textContent = "";
            resetBtn.removeChild(btn);
            buttons3.forEach(button => {
                button.disabled = false;
            });
        });
    }
}