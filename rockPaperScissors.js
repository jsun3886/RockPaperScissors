console.log("Lets Play Rock Paper Scissors!")

function getComputerChoice(){
    const rpsOptions =["Rock", "Paper", "Scissors"]
    return rpsOptions[Math.floor(Math.random()*3)]
}
function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "Rock":
            if (computerSelection=="Paper"){return "You Lose, Paper beats Rock!"}
            if (computerSelection=="Scissors"){return "You Win!, Rock Beats Scissors"}
            return "Rock vs Rock, Draw!"
            break;

        case "Paper":
            if (computerSelection=="Rock"){return "You Win!, Paper beats Rock!"}
            if (computerSelection=="Scissors"){return "You Lose, Scissors Beats Paper"}
            return "Paper vs Paper, Draw!"
            break;

        case "Scissors":
            if (computerSelection=="Paper"){return "You Win!, Scissors beats Paper!"}
            if (computerSelection=="Rock"){return "You Lose, Rock Beats Scissors"}
            return "Scissors vs Scissors, Draw!"
            break;

        default: return ("player selection input error")
    }


}

function getPlayerChoice(){
    let validInput=false
    let userPrompt = "Enter Rock, Paper, or Scissors!-->"
    while(!validInput){
        let playerChoice=prompt(userPrompt)
        //gets rid of spaces in user input
        playerChoice= playerChoice.replace(/\s+/g,'');
        console.log(playerChoice)
        // capatalizes the first letter in the inpus
        playerChoice= playerChoice.toLowerCase()
        playerChoice= playerChoice[0].toUpperCase()+ playerChoice.substring(1)
        console.log(playerChoice)
        if(playerChoice=="Rock"||playerChoice=="Paper"||playerChoice=="Scissors"){
            return playerChoice
        }
        else{
            userPrompt="Please enter only Rock, Paper, Or Scissors-->"
        }

    }
}



for ( let i = 0; i<5; i++){
    
    console.log(playRound(getPlayerChoice(),getComputerChoice()))
}