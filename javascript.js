const log =
console.log;

let computerChoice;
let humanChoice;
let roundResult;
let computerScore = 0;
let humanScore = 0;
let Winner;
const roundInfo = document.querySelector(".roundInfo");
const Choices = document.createElement("div");
const humanChoiceDiv = document.createElement("div");
const computerChoiceDiv = document.createElement("div");
const roundResultDiv = document.createElement("div");
const displayScoreDiv = document.createElement("div");
const gameWinner = document.createElement("p");

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

function getCPUChoice (){
    result = getRandomInt(1,4);
    //log("random integer = " + result);
    if (result === 1) {
        // log("Rock");
        return "Rock";
    } else if (result === 2){
        // log("Paper");
        return "Paper";
    } else {
        // log("Scissors");
        return "Scissors";
    }};

//getHumanChoice
const imgContainer = document.querySelector(".imgContainer");
imgContainer.addEventListener("click", (event)=>{
        let target = event.target;
        switch(target.id){
            case "Rock":
                humanChoice = "Rock";
                break;
            case "Paper":
                humanChoice = "Paper";
                break;
            case "Scissors":
                humanChoice = "Scissors";
                break;
        };
    });

function displayChoices(){
    humanChoiceDiv.textContent = "You Chose " + humanChoice + "!";
    computerChoiceDiv.textContent = "The Computer Chose " + computerChoice + "!";
    Choices.append(humanChoiceDiv, computerChoiceDiv);
    roundInfo.appendChild(Choices);
}

function clearChoices(){
    if (roundResult != undefined){
        Choices.removeChild(humanChoiceDiv);
        Choices.removeChild(computerChoiceDiv);
    };
};

//roundResult
function getRoundResult(){
    if (computerChoice === humanChoice){
        return "It's a Tie!";
    } else if (computerChoice === "Rock" && humanChoice === "Paper"
    || computerChoice === "Paper" && humanChoice === "Scissors"
    || computerChoice === "Scissors" && humanChoice === "Rock"){
        return "You Win!";
    } else {
        return "You Lose!";
    }
}

function displayRoundResult(){
    roundResultDiv.textContent = roundResult;
    roundInfo.appendChild(roundResultDiv);
}

function clearRoundResult(){
    if (roundResult != undefined){
        roundInfo.removeChild(roundResultDiv);
    };
};

function incrementScore(){
    if (roundResult === "You Lose!"){
        computerScore++;
    } else if (roundResult === "You Win!"){
        humanScore++;
    } else {
        return;
    }
};

function displayScore(){
    displayScoreDiv.textContent = "Computer Score:" + computerScore + "/5   Human Score:" + humanScore + "/5";
    roundInfo.appendChild(displayScoreDiv);
}

function clearScore(){
    if (roundResult != undefined){
        roundInfo.removeChild(displayScoreDiv);
    };
}
function getWinner(){
    if (computerScore === 3){
        return ("You lost the Game! Try again?");
    } else if (humanScore === 3){
        return ("You're the weiner! Play again?");
    } else {
        return undefined;
    }
};

function displayWinner(){
    gameWinner.textContent = Winner;
    if (computerScore === 3){
        gameWinner.setAttribute("style", "color:red; font-weight:700")
    } else if (humanScore ===3){
        gameWinner.setAttribute("style","color:green; font-weight:700")
    };
    roundInfo.appendChild(gameWinner);
}

function clearWinner(){
    if (Winner != undefined){
        roundInfo.removeChild(gameWinner)
    };
};

function playRound(){
    clearChoices();
    clearRoundResult();
    clearScore();
    clearWinner();
    computerChoice = getCPUChoice();
    displayChoices();
    roundResult = getRoundResult();
    displayRoundResult();
    incrementScore();
    displayScore();
    Winner = getWinner();
    if (Winner != undefined){
        displayWinner();
        computerScore = 0;
        humanScore = 0;
    };
};

imgContainer.addEventListener("click", playRound);