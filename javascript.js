//Declare the players score variables
let humanScore = 0;
let computerScore = 0;
const displayResult = document.querySelector("#displayResult");
const updateScore = document.querySelector(".updateScore");
const resultContainer = document.querySelector("#resultContainer");

//Function to get computer choice 
function getComputerChoice(){

    //to generate random number between the numbers 1, 2, 3
    let computerChoice = (Math.floor(Math.random() * 3) + 1);

    //to assign value of computer choice :1,2,3 to rock, paper,scissors, respectively
    if(computerChoice === 1){
        computerChoice = "rock";
    }else if(computerChoice === 2){
        computerChoice = "paper";
    }else {
    computerChoice = "scissors";
    }

    //to return the value of computer choice
    return computerChoice;
}

//function to announce winner and reset game at score 5 
function announceWinner(humanScore, computerScore)
{
    if (humanScore >= 5)
    {
        updateScore.textContent = `PLAYER ${humanScore} - ${computerScore} COMPUTER`;
    }else if (computerScore >= 5)
    {
        updateScore.textContent = `PLAYER ${humanScore} - ${computerScore} COMPUTER`;
    }
}



//logic to play single round
function playRound(humanChoice, computerChoice){

    //if user wins
    
        if (
            (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
            (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") ||
            (humanChoice.toLowerCase() === "paper" && computerChoice === "rock")
        ){
            humanScore++;
            if ((humanScore === 5) || (computerScore === 5)) {
                displayResult.textContent = "GAME OVER!!!";
                updateScore.textContent = `PLAYER: ${humanScore}, COMPUTER: ${computerScore}`;
                humanScore = 0; 
                computerScore = 0;
            }else {
            displayResult.textContent = "YOU WIN!!!";
            updateScore.textContent = `PLAYER: ${humanScore}, COMPUTER: ${computerScore}`;
            }
        }

        //if computer wins
        else if(
            (computerChoice === "rock" && humanChoice.toLowerCase() === "scissors") ||
            (computerChoice === "scissors" && humanChoice.toLowerCase() === "paper") ||
            (computerChoice === "paper" && humanChoice.toLowerCase() === "rock")
        ){
            computerScore++;
            if ((humanScore === 5) || (computerScore === 5)) {
                displayResult.textContent = "GAME OVER!!!";
                updateScore.textContent = `PLAYER: ${humanScore}, COMPUTER: ${computerScore}`;
                humanScore = 0; 
                computerScore = 0;
            }else {
            displayResult.textContent = "YOU LOSE!!!";
            updateScore.textContent = `PLAYER: ${humanScore}, COMPUTER: ${computerScore}`;
            }
        }

        //if it's a tie
        else {
            displayResult.textContent = "IT'S A TIE!!!";
            updateScore.textContent = `PLAYER: ${humanScore}, COMPUTER: ${computerScore}`;
        }
}

//add eventListener for rock paper scissors buttons
const rockButton = document.querySelector(".ROCK");
rockButton.addEventListener("click", () =>
{
    let playerChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    announceWinner(humanScore, computerScore);
});

const paperButton = document.querySelector(".PAPER");
paperButton.addEventListener("click", () =>
    {
        let playerChoice = "paper";
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        announceWinner(humanScore, computerScore);
    });

const scissorsButton = document.querySelector(".SCISSORS");
scissorsButton.addEventListener("click", () =>
    {
        let playerChoice = "scissors";
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        announceWinner(humanScore, computerScore);
    });
