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
   if (Choice <= 1){
    return "Rock it";
   }else if (Choice <=100 ){
    return "It's a paper";
   }else if (Choice % 5 === 0){
    return "Scissors";
   }
   else{
    return("PLEASE INPUT A NUMBER");
   }
}
console.log(getHumanChoice())

