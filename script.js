const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const btnAgain = document.querySelector(".btn-again");
const result = document.querySelector(".result");
const choice = document.querySelector(".choice");
const playeScore = document.querySelector(".playeScore");
const ComputerScore = document.querySelector(".ComputerScore");

let computerStr = "";
let pWin = 0;
let cWin = 0;
let winnerArr = [0, 0];

const init = function () {
  console.log("set to default");
  result.innerHTML = "";
  choice.innerHTML = "";
  playeScore.innerHTML = 0;
  ComputerScore.innerHTML = 0;
  computerStr = 0;
  pWin = 0;
  cWin = 0;

  btnRock.disabled = false;
  btnRock.classList.remove("hidden");
  btnPaper.disabled = false;
  btnPaper.classList.remove("hidden");
  btnScissors.disabled = false;
  btnScissors.classList.remove("hidden");
};

const endGame = function () {
  console.log("feez btns");
  btnRock.disabled = true;
  btnRock.classList.add("hidden");
  btnPaper.disabled = true;
  btnPaper.classList.add("hidden");
  btnScissors.disabled = true;
  btnScissors.classList.add("hidden");
};

btnAgain.addEventListener("click", function () {
  //set to default
  init();
});

btnScissors.addEventListener("click", function () {
  //Scissors == 0
  buttonClicked(0, "Scissors");
});

btnPaper.addEventListener("click", function () {
  //Paper == 1
  buttonClicked(1, "Paper");
});

btnRock.addEventListener("click", function () {
  //Rock == 2
  buttonClicked(2, "Rock");
});

function buttonClicked(PlayerSelected, playerStr) {
  //check if score count reach 5
  game();

  const computerSelected = Math.floor(Math.random() * 3);

  if (computerSelected === 0) computerStr = "Scissors";
  else if (computerSelected === 1) computerStr = "Paper";
  else if (computerSelected === 2) computerStr = "Rock";

  if (
    (PlayerSelected === 0 && computerSelected === 0) ||
    (PlayerSelected === 1 && computerSelected === 1) ||
    (PlayerSelected === 2 && computerSelected === 2)
  ) {
    choice.innerHTML = `Your choice is ${playerStr} and computer choice is ${computerStr}`;
    result.innerHTML = "Tie!";
    playeScore.innerHTML = pWin;
    ComputerScore.innerHTML = cWin;
    // console.log("Tie!");
  }

  if (
    (PlayerSelected === 0 && computerSelected === 1) ||
    (PlayerSelected === 1 && computerSelected === 2) ||
    (PlayerSelected === 2 && computerSelected === 0)
  ) {
    choice.innerHTML = `Your choice is ${playerStr} and computer choice is ${computerStr}`;
    result.innerHTML = `You Win!, ${playerStr} beats ${computerStr}`;
    pWin++;
    winnerArr.push(pWin, cWin);
    playeScore.innerHTML = pWin;
    ComputerScore.innerHTML = cWin;
    // console.log(pWin, cWin);
  }

  if (
    (PlayerSelected === 0 && computerSelected === 2) ||
    (PlayerSelected === 1 && computerSelected === 0) ||
    (PlayerSelected === 2 && computerSelected === 1)
  ) {
    choice.innerHTML = `Your choice is ${playerStr} and computer choice is ${computerStr}`;
    result.innerHTML = `You Loose!, ${computerStr} beats ${playerStr}`;
    cWin++;
    winnerArr.push(pWin, cWin);
    playeScore.innerHTML = pWin;
    ComputerScore.innerHTML = cWin;
    // console.log(pWin, cWin);
  }
}
// }

const game = function () {
  console.log(pWin, cWin);
  if (pWin === 4 || cWin === 5) {
    choice.innerHTML = "";
    result.innerHTML = `You Win!`;

    // if (pWin > cWin) {
    //   choice.innerHTML = "";
    //   result.innerHTML = `You Win!`;
    // } else {
    //   choice.innerHTML = "";
    //   result.innerHTML = `You Loose!,`;
    // }
    console.log("end game");
    endGame();
  }
};
