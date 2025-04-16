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
   let Choice = prompt("What number do you choose?");
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

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice){

}
