function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};
const log =
console.log;

function getCPUChoice (){
    result = getRandomInt(1,4);
    log("random integer = " + result);
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

let computerChoice = getCPUChoice();
log("Computer chooses " + computerChoice);

function getHumanChoice() {
    return prompt("Write Rock, Paper, or Scissors", "");
};
let humanInitial = getHumanChoice();
// log(humanInitial);
let humanChoice = humanInitial[0].toUpperCase() + humanInitial.slice(1).toLowerCase();
log("You chose " + humanChoice);

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
let roundResult = getRoundResult();
log(roundResult);

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
incrementScore();
log("CPU Score: " + computerScore);
log("Player Score: " + humanScore);

function newRound(){
    computerChoice = getCPUChoice();
    log("Computer chooses " + computerChoice);
    humanInitial = getHumanChoice();
    humanChoice = humanInitial[0].toUpperCase() + humanInitial.slice(1).toLowerCase();
    log("You chose " + humanChoice);
    roundResult = getRoundResult();
    incrementScore();
    log(roundResult);
    log("CPU Score: " + computerScore);
    log("Player Score: " + humanScore);
};