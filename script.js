let userScore = 0;
let compScore = 0;

function play(userChoice) {

  const choices = ["rock", "paper", "scissors"];
  const compChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === compChoice) {
    result = "Ничья";
  } 
  else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    result = "Вы выиграли!";
    userScore++;
  } 
  else {
    result = "Компьютер выиграл!";
    compScore++;
  }

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("compScore").innerText = compScore;
  document.getElementById("resultText").innerText = result;
}

function resetGame() {
  userScore = 0;
  compScore = 0;

  document.getElementById("userScore").innerText = 0;
  document.getElementById("compScore").innerText = 0;
  document.getElementById("resultText").innerText = "Сделайте ход";
}