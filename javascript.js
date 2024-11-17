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


//Function to get user's choice
function getHumanChoice(){

    //to prompt user for input
    let humanChoice = prompt("choose one of : rock, paper, scissors");

    //return value of user input
    return humanChoice;
}


//Declare the players score variables
let humanScore = 0;
let computerScore = 0;


//logic to play single round
function playRound(humanChoice, computerChoice){

    //if user wins
    if (
        (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice === "rock")
      ){
        humanScore++;
        console.log("You won");
        console.log(`Your choice =  ${humanChoice}`);
        console.log(`Computer's choice = ${computerChoice}`);
        console.log(`Your score =  ${humanScore}`);
        console.log(`Computer's score = ${computerScore}`);
    
      }

      //if computer wins
      else if(
        (computerChoice === "rock" && humanChoice.toLowerCase() === "scissors") ||
        (computerChoice === "scissors" && humanChoice.toLowerCase() === "paper") ||
        (computerChoice === "paper" && humanChoice.toLowerCase() === "rock")
      ){
        computerScore++;
        console.log("You lost");
        console.log(`Your choice = ${humanChoice}`);
        console.log(`Computer's choice = ${computerChoice}`);
        console.log(`Your score = ${humanScore}`);
        console.log(`Computer's score = ${computerScore}`);
      }

      //if it's a tie
      else {
        console.log("It's a tie");
        console.log(`Your choice = ${humanChoice}`);
        console.log(`Computer's choice = ${computerChoice}`);
        console.log(`Your score = ${humanScore}`);
        console.log(`Computer's score = ${computerScore}`);
      }
            
}

//logic to play game 5 rounds
function playGame(){

    //loop to make game last 5 rounds
    for(i = 0; i < 5; i++){
        
        //declaring and assigning computer choice to getComputerChoice function
        let computerChoice = getComputerChoice();

        //declaring and assigning human choice to getHumanChoice function
        let humanChoice = getHumanChoice();

        //calling playRound function and passing humanChoice and computerChoice as arguments
        playRound(humanChoice, computerChoice);

        //to print new line ....to make console neat
        console.log("\n");  
    }

    //to print extra line after game ends...extra line will be 2 because last loop printed a line ...plus this one
    console.log("\n");

    //print out game over
    console.log("GAME OVER!!!");

    //to calculate and declare winner 
    if (humanScore > computerScore){
        console.log("you win");
        console.log(`You = ${humanScore}`);
        console.log(`Computer = ${computerScore}`);

    }else if(computerScore > humanScore){
        console.log("You lose");
        console.log(`You = ${humanScore}`);
        console.log(`Computer = ${computerScore}`);

    }else {
        console.log("It's a Tie");
        console.log(`You = ${humanScore}`);
        console.log(`Computer = ${computerScore}`);
    }
}

//calling playGame function
playGame();