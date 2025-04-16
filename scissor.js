function getComputerChoice(){
    const Number = Math.random();
    if (Number === 0){
        return "Rock it";
    }else if(Number === 1){
        return "It's a paper";
    }else{
        return "scissors";
    }


}

console.log(getComputerChoice());

function getHumanChoice(humanChoice){
   let Choice = prompt("Choose Rock, Paper or Scissors");
   if (Choice === "Rock"){
    return "Rock it";
   }else if (Choice === "Paper" ){
    return "It's a paper";
   }else if (Choice === "Scissors"){
    return "Cut it";
   }
   else{
    return("PLEASE INPUT 'Rock, Paper or Scissors'");
   }
}
console.log(getHumanChoice())

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    function playRound(humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase();
  
      if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      } else if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
      } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      }
    }
  
    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      console.log(`Score after Round ${i} — You: ${humanScore}, Computer: ${computerScore}`);
    }
  
    // Final winner
    if (humanScore > computerScore) {
      console.log("You win the game!");
    } else if (computerScore > humanScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("The game is a tie!");
    }
  }
  
  // Start the game
  playGame();
  