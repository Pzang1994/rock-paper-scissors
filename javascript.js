function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};
const log =
console.log;

function getCPUChoice (){
    result = getRandomInt(1,4);
    log(result);
    if (result === 1) {
        log("Rock");
        return "Rock";
    } else if (result === 2){
        log("Paper");
        return "Paper";
    } else {
        log("Scissors");
        return "Scissors";
    }};

let computerChoice = getCPUChoice();
log(computerChoice);