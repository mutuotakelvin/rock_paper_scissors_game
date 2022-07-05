const choices = ['Rock','Paper','Scissors']



function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]
}

const playerSelection = 'Rock'
const computerSelection = computerPlay()

let result

function playRound(playerSelection,computerSelection){
    if(computerSelection === playerSelection){
        result = "It's a tie!"
    }
    if(computerSelection === "Rock" && playerSelection === "Paper"){
        result = "You win!"
    }
    if(computerSelection === "Rock" && playerSelection === "Scissors"){
        result = "You lose! Rock beats Scissors"
    }
    if(computerSelection === "Paper" && playerSelection === "Scissors"){
        result = "You win!"
    }
    if(computerSelection === "Paper" && playerSelection === "Rock"){
        result = "You lose! Paper beats Rock"
    }
    if(computerSelection === "Scissors" && playerSelection === "Rock"){
        result = "You win!"
    }
    if(computerSelection === "Scissors" && playerSelection === "Paper"){
        result = "You lose! Scissors beats Paper"
    }
    return result
}

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection,computerSelection))