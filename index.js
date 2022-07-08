const choices = ['Rock','Paper','Scissors']
const buttons = document.querySelectorAll('button')
const results = document.getElementById('results')
const comp = document.getElementById('computer')
const you = document.getElementById('you')


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
        results.innerText = result
    }
    if(computerSelection === "Rock" && playerSelection === "Paper"){
        result = "You win!"
        results.innerText = result
        // playerScore +=1
    }
    if(computerSelection === "Rock" && playerSelection === "Scissors"){
        result = "You lose! Rock beats Scissors"
        results.innerText = result
        // playerScore -=1
    }
    if(computerSelection === "Paper" && playerSelection === "Scissors"){
        result = "You win!"
        results.innerText = result
        // playerScore+=1
    }
    if(computerSelection === "Paper" && playerSelection === "Rock"){
        result = "You lose! Paper beats Rock"
        results.innerText = result
        // playerScore -=1
    }
    if(computerSelection === "Scissors" && playerSelection === "Rock"){
        result = "You win!"
        results.innerText = result
        // playerScore +=1
    }
    if(computerSelection === "Scissors" && playerSelection === "Paper"){
        result = "You lose! Scissors beats Paper"
        results.innerText = result
        // playerScore -=1
    }
    return result 
}

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        comp.innerText = "Computer: " + computerSelection
        you.innerHTML = "You: " + button.id
        playRound(button.id,computerSelection)
        
    })
})
// console.log(computerSelection)
// console.log(playerSelection)

// function game(){
//     for(let i = 0;i<5;i++){
//         console.log(playRound(playerSelection,computerSelection))
//         // playRound(playerSelection,computerSelection)
//         rounds = i
//     }
//     console.log(rounds)
// }
// game()
// console.log(playRound(playerSelection,computerSelection))