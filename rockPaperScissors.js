console.log("Lets Play Rock Paper Scissors!")
// returns a randomly generated choice for a game of rock paper scissors
function getComputerChoice(){
    const rpsOptions =["Rock", "Paper", "Scissors"]
    return rpsOptions[Math.floor(Math.random()*3)]
}


/*
Returns the result for rock paper scissors in the form of an array 
1, win string for a win
-1, lose string for a loss
0, draw string for a draw



*/
function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "Rock":
            if (computerSelection=="Paper"){return [-1,"You Lose, Paper beats Rock!"]}
            if (computerSelection=="Scissors"){return [1,"You Win!, Rock Beats Scissors"]}
            return [0,"Rock vs Rock, Draw!"]
            break;

        case "Paper":
            if (computerSelection=="Rock"){return[1, "You Win!, Paper beats Rock!"]}
            if (computerSelection=="Scissors"){return [-1,"You Lose, Scissors Beats Paper"]}
            return [0,"Paper vs Paper, Draw!"]
            break;

        case "Scissors":
            if (computerSelection=="Paper"){return [1,"You Win!, Scissors beats Paper!"]}
            if (computerSelection=="Rock"){return [-1,"You Lose, Rock Beats Scissors"]}
            return [0,"Scissors vs Scissors, Draw!"]
            break;

        default: return ("player selection input error")
    }


}


// prompts and sanatizes a user choice for rock paper scissors
function getPlayerChoice(){
    let validInput=false
    let userPrompt = "Enter Rock, Paper, or Scissors!-->"
    while(!validInput){
        let playerChoice=prompt(userPrompt)
        //gets rid of spaces in user input
        playerChoice= playerChoice.replace(/\s+/g,'');
        //console.log(playerChoice)
        // capatalizes the first letter in the inpus
        playerChoice= playerChoice.toLowerCase()
        playerChoice= playerChoice[0].toUpperCase()+ playerChoice.substring(1)
        //console.log(playerChoice)
        if(playerChoice=="Rock"||playerChoice=="Paper"||playerChoice=="Scissors"){
            return playerChoice
        }
        else{
            userPrompt="Please enter only Rock, Paper, Or Scissors-->"
        }

    }
}

// plays 5 round of rock paper scissors and keeps score. 
function game(){
    console.log("Lets play some Rock Paper Scissors!")
    let playerWins =0
    let computerWins=0
    let result=[0,'']
    for (let i = 0; i<5;i++){
        result=playRound(getPlayerChoice(),getComputerChoice())
        switch(result[0]){
            case(1):playerWins++
            break;
            case(-1):computerWins++
            break;
            case(0):break;
            default:console.log("Something has gone very wrong")
        }
        //prints out the result of each round that the current score
        console.log(result[1])
        console.log("Curent Score: Player = "+playerWins+" vs Computer = "+computerWins)
    }
    if(playerWins>computerWins){
        console.log("Congratulations you won the best of 5!!")

    } else if (playerWins<computerWins){
        console.log("Better luck next time, the computer won the best of 5")

    } else { 
        console.log("The best of 5 was a Draw!")
    }
    

}


//plays the game
game()