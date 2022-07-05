const choices = ['Rock','Paper','Scissors']



function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]
}

const playerSelection = 'Paper'
const computerSelection = computerPlay()

let result
let playerScore = 0

function playRound(playerSelection,computerSelection){
    if(computerSelection === playerSelection){
        result = "It's a tie!"
    }
    if(computerSelection === "Rock" && playerSelection === "Paper"){
        result = "You win!"
        playerScore +=1
    }
    if(computerSelection === "Rock" && playerSelection === "Scissors"){
        result = "You lose! Rock beats Scissors"
        playerScore -=1
    }
    if(computerSelection === "Paper" && playerSelection === "Scissors"){
        result = "You win!"
        playerScore+=1
    }
    if(computerSelection === "Paper" && playerSelection === "Rock"){
        result = "You lose! Paper beats Rock"
        playerScore -=1
    }
    if(computerSelection === "Scissors" && playerSelection === "Rock"){
        result = "You win!"
        playerScore +=1
    }
    if(computerSelection === "Scissors" && playerSelection === "Paper"){
        result = "You lose! Scissors beats Paper"
        playerScore -=1
    }
    return "result is " + result + " and playerScore is " + playerScore
}
console.log(computerSelection)
console.log(playerSelection)

function game(){
    for(let i = 0;i<5;i++){
        console.log(playRound(playerSelection,computerSelection))
        // playRound(playerSelection,computerSelection)
        rounds = i
    }
    console.log(rounds)
}
game()
// console.log(playRound(playerSelection,computerSelection))