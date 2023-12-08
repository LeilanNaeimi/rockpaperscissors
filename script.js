const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

const selection = ["scissors", "paper", "rock"];

function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 3);
  console.log(computerSelection);
  return computerSelection;
}

btnPaper.addEventListener("click", function () {
  buttonClicked(1);
});

btnRock.addEventListener("click", function () {
  buttonClicked(2);
});

btnScissors.addEventListener("click", function () {
  buttonClicked(0);
});

function buttonClicked(btnNumber) {
  console.log(btnNumber);
  return btnNumber;
}

// function playRound(playerSelection, computerSelection) {
// }

console.log(getComputerChoice(), buttonClicked());
// const playerSelection = buttonClicked();
// const computerSelection = getComputerChoice();
// console.log(
//   `playerSelection: ${playerSelection} and
//   computerSelection: ${computerSelection} `
// );

// console.log(playRound(playerSelection, computerSelection));

/*
Rock beats Scissors
Scissors beats Paper
Paper beats Rock

You Lost the game to a computer!
Tie!
Win!
*/
