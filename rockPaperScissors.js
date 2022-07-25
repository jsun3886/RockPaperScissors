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


for ( let i = 0; i<5; i++){
    console.log(playRound("Rock",getComputerChoice()))
}