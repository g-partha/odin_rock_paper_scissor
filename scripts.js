// getComputerChoice function

function getComputerChoice(){

    // Generate a random number between 0 and 1 and store it in randomNumber.
    let randomNumber = Math.random();

    // Depending on the condition if randomNumber falls between 0-0.33, 0.33 - 0.66 and 0.66 -1, return value of "rock", "paper" or "scissor".
    if(randomNumber < 0.33){return "rock";}
    else if(randomNumber >= 0.33 && randomNumber < 0.66 ){return "paper";}
    else {return "scissor";}
}

// getHumanChoice function

function getHumanChoice(){
    // Promt user to enter either "rock", "paper" or "scissor" and return the value.
    return prompt("Please enter your choice, i.e. Rock, Paper or Scissor.", " ");
}

// Variable for storing game result count

// Create variable humanScore with value 0.
let humanScore = 0;
// Create variable compterScore with value 0.
let computerScore = 0;
// Create variable totalRounds with value 0.
let totalRounds = 0;

// playRound function

function playRound(){

    // store the value returned by getHumanChoice function in lowercase in humanChoice.
    let humanChoicePrompt = getHumanChoice();
    let humanChoice = humanChoicePrompt.toLowerCase();

    // store the value returned by getComputerChoice function in computerChoice.
    let computerChoice = getComputerChoice();

    // Increment totalRounds by 1.
    totalRounds++;

    // Write conditions for computerChoice for each condition of userChoice.

    // If humanChoice is "rock", write conditions for computerChoice
    if (humanChoice == "rock"){
        switch(computerChoice){
            case "rock":
                console.log("Its a draw!");
                break;
            case "paper":
                console.log("You lose! paper beats rock.");
                //Increment computerScore by 1 if computer wins.
                computerScore++;
                break;
            case "scissor":
                console.log("Yay you win! Rock beats scissor.");
                //Increment humanScore by 1 if human wins.
                humanScore++;
                break;
        }
    }

    // If humanChoice is "paper", write conditions for computerChoice
    if (humanChoice == "paper"){
        switch(computerChoice){
            case "rock":
                console.log("Yay you win! paper beats rock.");
                //Increment humanScore by 1 if human wins.
                humanScore++;
                break;
            case "paper":
                console.log("Its a draw!");
                break;
            case "scissor":
                console.log("You lose! scissor beats paper")
                //Increment computerScore by 1 if computer wins.
                computerScore++;
                break;
                
        }
    }

    // If humanChoice is "scissor", write conditions for computerChoice
    if (humanChoice == "scissor"){
        switch(computerChoice){
            case "rock":
                console.log("You lose! rock beats scissor");
                //Increment computerScore by 1 if computer wins.
                computerScore++;
                break;
            case "paper":
                console.log("Yay you win! scissor beats paper.");
                //Increment humanScore by 1 if human wins.
                humanScore++;
                break;
            case "scissor":
                console.log("Its a draw");
                break;
                
        }
    }
}

// playGame finction

function playGame(){

        // Play five rounds
        playRound();
        playRound();
        playRound();
        playRound();
        playRound();

        // Display the final score.
        console.log("Human Score: " + humanScore + ", Computer Score: " + computerScore);

        // Display the result
        if(humanScore > computerScore){
            console.log("You win!");
        }
        else if(humanScore == computerScore){
            console.log("Its a draw!");
        }
        else {
            console.log("You lose!");
        }

}

playGame();