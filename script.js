const resultText = document.querySelector('#resultText');
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
const scorePlayerText = document.querySelector('.scorePlayer');
const scoreComputerText = document.querySelector('.scoreComputer');

let player;
let computer;
let scorePlayer = 0;
let scoreComputer = 0;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent; 
    getComputerChoice()
    playerText.textContent = `Player : ${player}`
    computerText.textContent = `Computer : ${computer}`
    resultText.textContent = `Resultado: ${checkWinner()}`
    scorePlayerText.textContent = `Score: ${scorePlayer}`
    scoreComputerText.textContent = `Score: ${scoreComputer}`
}));

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1

    switch(randomNum) {
        case 1:
            computer = "Piedra";
        break;
        case 2:
            computer = "Papel";
        break;
        case 3:
            computer = "Tijera";
        break;
    }
}

function checkWinner() {
  if (player == computer) {
    return "Empate!";
  } else if (
    (computer == "Piedra" && player == "Tijera") ||
    (computer == "Papel" && player == "Piedra") ||
    (computer == "Tijera" && player == "Papel")
  ) {
    scoreComputer++;
    game()
    return "Perdiste";
  } else if (
    (computer == "Piedra" && player == "Papel") ||
    (computer == "Papel" && player == "Tijera") ||
    (computer == "Tijera" && player == "Piedra")
  ) {
    scorePlayer++
    game()
    return "Ganaste!";
  }
}

const newGame = () => {
    playerText.textContent = 'Player: ';
    computerText.textContent = 'Computer: ';
    resultText.textContent = 'Resultado: ';
    scoreComputer = 0;
    scorePlayer = 0;
}

function game() {
    if (scoreComputer == 5) {
        alert(`Perdiste! ${scoreComputer} a ${scorePlayer}`);
        newGame();
    } else if (scorePlayer == 5) {
        alert(`Ganaste! ${scorePlayer} a ${scoreComputer}`);
        newGame();
    }
}