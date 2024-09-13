const log =
console.log;

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

let computerChoice;

const imgContainer = document.querySelector(".imgContainer");
let humanChoice;

imgContainer.addEventListener("click", (event)=>{
        let target = event.target;
        switch(target.id){
            case "Rock":
                humanChoice = "Rock";
                console.log(humanChoice);
                break;
            case "Paper":
                humanChoice = "Paper";
                console.log(humanChoice);
                break;
            case "Scissors":
                humanChoice = "Scissors";
                console.log(humanChoice);
                break;
        };
    });

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
let roundResult;

let computerScore = 0;
let humanScore = 0;
function incrementScore(){
    if (roundResult === "You Lose!"){
        computerScore++;
    } else if (roundResult === "You Win!"){
        humanScore++;
    } else {
        return;
    }
};

function getWinner(){
    if (computerScore === 3){
        return ("You lost the Game! Try again?");
    } else if (humanScore === 3){
        return ("You're the weiner! Play again?");
    } else {
        return "";
    }
};
let Winner;

function playRound(){
    computerChoice = getCPUChoice();
    log("You chose " + humanChoice);
    log("The Computer chose " + computerChoice);
    roundResult = getRoundResult();
    incrementScore();
    log(roundResult);
    log("CPU Score: " + computerScore + "/5");
    log("Player Score: " + humanScore + "/5");
    Winner = getWinner();
};

imgContainer.addEventListener("click", playRound);