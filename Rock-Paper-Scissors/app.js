console.log("Hello World");

function getComputerChoice() {
  console.log(Math.floor(Math.random() * 3));
  const random = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[random];
}

function getHumanChoice() {
  let promt = prompt(`Write "rock", "paper"or "scissors"`);
  return promt;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("you win");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("you win");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("you win");
    humanScore++;
  } else {
    console.log("you loose");
    computerScore++;
    if (humanScore <= 0) {
      humanScore = 0;
    }
  }
  console.log(humanScore);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}
playGame();
