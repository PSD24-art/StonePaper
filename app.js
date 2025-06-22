let userScore = 0;
let compScore = 0;
let userChoice = document.querySelectorAll(".item");
let compChoices = ["rock", "paper", "scissor"];
let userPoint = document.querySelector("#you");
let compPoint = document.querySelector("#comp");

let compChoice;
let note = document.querySelector("#note");

let showWinner = (userWin) => {
  if (userWin) {
    console.log("You won!");
    note.innerText = "Congratulations! You won";
    note.style.backgroundColor = "Green";
    userScore++;
    you.innerText = userScore;
  } else {
    console.log("You Lost");
    note.innerText = "Bad Luck! You lose";
    note.style.backgroundColor = "Red";
    compScore++;
    comp.innerText = compScore;
  }
};

let action = userChoice.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("User Choice= ", item.id);
    let compIdx = Math.floor(Math.random() * 3);
    compChoice = compChoices[compIdx];
    console.log("Computer Choice= ", compChoice);
    let userWin = true;
    if (
      (item.id === "rock" && compChoice === "scissor") ||
      (item.id === "paper" && compChoice === "rock") ||
      (item.id === "scissor" && compChoice === "paper")
    ) {
      userWin = true;
    } else {
      userWin = false;
    }
    showWinner(userWin);
  });
});
