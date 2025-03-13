const computerDisplay= document.getElementById("computer-choice")
const userDisplay= document.getElementById("user-choice")
const resultDisplay= document.getElementById("result")
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
possibleChoice.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
userChoice = e.target.id
userDisplay.innerHTML=userChoice
generateComputerChoice()
generateResult()
}))

function generateComputerChoice(){
    const randomNumber= Math.floor(Math.random()*possibleChoice.length) +1
    if (randomNumber === 1){
        computerChoice = 'Rock'
    }
    if (randomNumber === 2){
        computerChoice = 'Paper'
    }
    if (randomNumber === 3){
        computerChoice = 'Scissors'
    }
    computerDisplay.innerHTML=computerChoice
}

function generateResult(){
    if (computerChoice === userChoice ){
        resultDisplay.innerHTML = "It's a Tie"
    }
    if (computerChoice === "Rock" && userChoice === "Paper"){
        resultDisplay.innerHTML = "You've Won!"
    }
    if (computerChoice === "Rock" && userChoice === "Scissors"){
        resultDisplay.innerHTML = "You've Lost!"
    }
    if (computerChoice === "Paper" && userChoice === "Rock"){
        resultDisplay.innerHTML = "You've Won!"
    }
    if (computerChoice === "Paper" && userChoice === "Scissors"){
        resultDisplay.innerHTML = "You've Lost!"
    }
    if (computerChoice === "Scissors" && userChoice === "Rock"){
        resultDisplay.innerHTML = "You've Won!"
    }
    if (computerChoice === "Scissors" && userChoice === "Paper"){
        resultDisplay.innerHTML = "You've Lost!"
    }

}