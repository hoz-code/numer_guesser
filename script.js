let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (hGuess, cGuess, secretTarget) => {
  if (hGuess > 9 || hGuess < 0) {
    alert("that is not a option valid");
  }
  let hDistance = Math.abs(secretTarget - hGuess);
  let cDistance = Math.abs(secretTarget - cGuess);
  if (hDistance === cDistance) {
    return true;
  } else if (hDistance > cDistance) {
    return false;
  } else if (hDistance < cDistance) {
    return true;
  } else {
    return "somthing wrong is hapenning";
  }
};

const updateScore = (sWinner) => {
  if (sWinner === "human") {
    humanScore++;
  } else if (sWinner === "computer") {
    computerScore++;
  } else {
    return "IT IS NOT A HUMAN O COMPUTER PARAMETER";
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
