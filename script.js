const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const btnAgain = document.querySelector(".btn-again");
const result = document.querySelector(".result");
const choice = document.querySelector(".choice");

let computerStr = "";
let btnCounter = 0;

const init = function () {
  console.log("set to default");
  result.innerHTML = "";
  choice.innerHTML = "";
  computerStr = 0;
  btnCounter = 0;
};

btnAgain.addEventListener("click", function () {
  //set to default
  init();
});

console.log("aaaaaaaaaaa" + btnCounter);
btnScissors.addEventListener("click", function () {
  //Scissors == 0
  btnCounter++;
  buttonClicked(0, "Scissors");
});

btnPaper.addEventListener("click", function () {
  //Paper == 1
  btnCounter++;
  buttonClicked(1, "Paper");
});

btnRock.addEventListener("click", function () {
  //Rock == 2
  btnCounter++;
  buttonClicked(2, "Rock");
});

function buttonClicked(PlayerSelected, playerStr) {
  const computerSelected = Math.floor(Math.random() * 3);

  if (computerSelected === 0) computerStr = "Scissors";
  else if (computerSelected === 1) computerStr = "Paper";
  else if (computerSelected === 2) computerStr = "Rock";

  console.log(
    btnCounter,
    PlayerSelected,
    computerSelected,
    playerStr,
    computerStr
  );

  if (
    (PlayerSelected === 0 && computerSelected === 0) ||
    (PlayerSelected === 1 && computerSelected === 1) ||
    (PlayerSelected === 2 && computerSelected === 2)
  ) {
    choice.innerHTML = `Your choice is ${playerStr} and computer choice is ${computerStr}`;
    result.innerHTML = "Tie!";
    console.log("Tie!");
  }

  if (
    (PlayerSelected === 0 && computerSelected === 1) ||
    (PlayerSelected === 1 && computerSelected === 2) ||
    (PlayerSelected === 2 && computerSelected === 0)
  ) {
    choice.innerHTML = `Your choice is ${playerStr} and computer choice is ${computerStr}`;
    result.innerHTML = `You Win!, ${playerStr} beats ${computerStr}`;
    console.log(`You Win!, ${playerStr} beats ${computerStr}`);
  }

  if (
    (PlayerSelected === 0 && computerSelected === 2) ||
    (PlayerSelected === 1 && computerSelected === 0) ||
    (PlayerSelected === 2 && computerSelected === 1)
  ) {
    choice.innerHTML = `Your choice is ${playerStr} and computer choice is ${computerStr}`;
    result.innerHTML = `You Loose!, ${computerStr} beats ${playerStr}`;
    console.log(`You Loose!, ${computerStr} beats ${playerStr}`);
  }
  /// you win
  // if (btnNumber === 0 && computerSelected === 1) {
  //   console.log("You Win!, Scissors beats Paper");
  // }

  // if (btnNumber === 1 && computerSelected === 2) {
  //   console.log("You Win!, Paper beats Rock");
  // }

  // if (btnNumber === 2 && computerSelected === 0) {
  //   console.log("You Win!, Rock beats Scissors");
  // }

  /// you Loose
  // if (btnNumber === 0 && computerSelected === 2) {
  //   console.log("You Loose!, Rock beats Scissors");
  // }

  // if (btnNumber === 1 && computerSelected === 0) {
  //   console.log("You Loose!, Scissors beats Paper");
  // }

  // if (btnNumber === 2 && computerSelected === 1) {
  //   console.log("You Loose!, Paper beats Rock");
  // }
}
