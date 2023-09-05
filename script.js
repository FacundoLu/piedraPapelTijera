function getRandomNumber() {
    const random = Math.random();

    const multiplied = random * 9;

    const rounded = Math.floor(multiplied);

    return rounded;
}

function getComputerChoice() {
    if (getRandomNumber() < 3) {
        return "piedra";
    } else if (getRandomNumber() < 6) {
        return "papel";
    } else {
        return "tijera";
    }
}

const computerSelection = getComputerChoice();
const playerSelection =  prompt("Elije entre Piedra Papel y Tijera").toLowerCase();


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "piedra" && computerSelection === "tijera") {
        return "Ganaste! la Piedra rompe la Tijera";
    } else if (playerSelection === "tijera" && computerSelection === "piedra") {
        return "Perdiste! la Piedra rompe la Tijera";
    } else if (playerSelection === "piedra" && computerSelection === "papel") {
        return "Perdiste! el Papel le gana a la Piedra";
    } else if (playerSelection === "tijera" && computerSelection === "papel") {
        return "Ganaste! la Tijera corta el Papel";
    } else if (playerSelection === "papel" && computerSelection === "tijera") {
        return "Perdiste! la Tijera corta el Papel";
    } else if (playerSelection === "papel" && computerSelection === "piedra") {
        return "Ganaste! el Papel le gana a la Piedra";
    } else if (playerSelection === computerSelection) {
        playerSelection = prompt("Empate! elije otra vez entre Piedra Papel y Tijera").toLowerCase();
        computerSelection = getComputerChoice(getRandomNumber());
        return playRound(playerSelection, computerSelection);
    } else {
        playerSelection = prompt("Asegúrese de elegir una de las tres opciones disponibles: Piedra Papel y Tijera").toLowerCase();
        return playRound(playerSelection, computerSelection);
    }
}

console.log(playRound(playerSelection, computerSelection));