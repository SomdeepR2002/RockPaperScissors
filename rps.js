function getComputerChoice()
{
    let choice = ['rock','paper','scissor']
    return choice [Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "paper" && computerSelection ==="scissor" ||
    playerSelection === "scissor" && computerSelection ==="rock"){
        return("You lose! " +computerSelection+ " beats " +playerSelection);
    }
    else if (playerSelection === computerSelection){
        return("It's a tie!");
    }
    /*else if(playerSelection != "rock" || playerSelection != "paper" ||
    playerSelection != "scissor" ){
        return("You've misspelled");
    }*/
    else{
        return("You Win! "+ playerSelection + " beats "+computerSelection);
    }

}



function game()
{
    for(let i=0;i<5;i++)
    {
        let playerSelection = prompt("Please enter your choice");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }

}
game()
/*
let random = getComputerChoice();
console.log(random);
*/