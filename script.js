function getComputerChoice(){

    // Generate a random number between 0 and 1 and store it in randomNumber.
    let randomNumber = Math.random();
    if(randomNumber < 0.33){return "rock";}
    else if(randomNumber >= 0.33 && randomNumber < 0.66 ){return "paper";}
    else {return "scissor";}
}

let humanScore = 0;
let computerScore = 0;
let totalRounds = 0;

const resultContainer = document.querySelector("#result-container");
let roundResult = document.createElement("p");
let scoreCounter = document.createElement("p");
let gameResult = document.createElement("p");

resultContainer.appendChild(roundResult);
resultContainer.appendChild(scoreCounter);
resultContainer.appendChild(gameResult);


let roundResultValue = " ";
let gameResultValue = " ";

function playRound(event){

    let humanChoice = " ";
    let target = event.target;
    switch(target.id){
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissor":
            humanChoice = "scissor";
            break;
    }
    let computerChoice = getComputerChoice();
    totalRounds++;
    if (humanChoice == "rock"){
        switch(computerChoice){
            case "rock":
                roundResultValue = "Its a draw!";
                break;
            case "paper":
                roundResultValue = "You lose! paper beats rock.";
                //Increment computerScore by 1 if computer wins.
                computerScore++;
                break;
            case "scissor":
                roundResultValue = "Yay you win! Rock beats scissor.";
                //Increment humanScore by 1 if human wins.
                humanScore++;
                break;
        }
    }

    else if (humanChoice == "paper"){
        switch(computerChoice){
            case "rock":
                roundResultValue = "Yay you win! paper beats rock.";
                //Increment humanScore by 1 if human wins.
                humanScore++;
                break;
            case "paper":
                roundResultValue = "Its a draw!";
                break;
            case "scissor":
                roundResultValue = "You lose! scissor beats paper.";
                //Increment computerScore by 1 if computer wins.
                computerScore++;
                break;
                
        }
    }

    else if (humanChoice == "scissor"){
        switch(computerChoice){
            case "rock":
                roundResultValue = "You lose! rock beats scissor";
                //Increment computerScore by 1 if computer wins.
                computerScore++;
                break;
            case "paper":
                roundResultValue = "Yay you win! scissor beats paper.";
                //Increment humanScore by 1 if human wins.
                humanScore++;
                break;
            case "scissor":
                roundResultValue = "Its a draw!";
                break;
                
        }
    }
    roundResult.textContent = roundResultValue;
    scoreCounter.textContent = `Your Score: ${humanScore}, Computer's Score: ${computerScore}`;
    gameResult.textContent = gameResultValue;

    console.log("human score " + humanScore);
    console.log(" computer score " + computerScore);
    if(humanScore == 5){
        gameResultValue = "You Win!";
        gameResult.textContent = gameResultValue;
        humanScore = 0;
        computerScore = 0;
        gameResultValue = " ";
    }
    else if(computerScore == 5){
        gameResultValue = "You lose!";
        gameResult.textContent = gameResultValue;
        humanScore = 0;
        computerScore = 0;
        gameResultValue = " ";

    }
}

const buttons = document.querySelector("#buttons");
    buttons.addEventListener("click", playRound);
    // console.log("human score " + humanScore);
    // console.log(" computer score " + computerScore);
    // if(humanScore == 5){
    //     gameResultValue = "You Win!";
    //     gameResult.textContent = gameResultValue;
    // }
    // else if(computerScore == 5){
    //     gameResultValue = "You lose!";
    //     gameResult.textContent = gameResultValue;

    // }