console.log("Lets Play Rock Paper Scissors!")

function getComputerChoice(){
    const rpsOptions =["Rock", "Paper", "Scissors"]
    return rpsOptions[Math.floor(Math.random()*3)]
}

for(let  i=0; i<5; i++){
    console.log(getComputerChoice())
}