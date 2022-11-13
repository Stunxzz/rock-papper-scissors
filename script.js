
const gameMenu = document.getElementById("game-menu")
const menuBtn = document.getElementsByClassName("menu-btn")
const rock = document.getElementById("rock")
let papper = document.getElementById("papper")
let scissors = document.getElementById("scissors")
const winsSocre = document.getElementById("win-score")
const losseScore = document.getElementById("losse-score")
const titleWin = document.getElementById("you-win")
const titleLose = document.getElementById("you-losse")
const titleNoWinner = document.getElementById("no-winner")
let wins = 0
let losses = 0
let myChoice = ""
function closeGame(){
    gameMenu.style.display ="none";
}
function startGame(){
    gameMenu.style.display ="inline"
}
function robotChoice(){
    let items = ["rock","papper","scissors"]
    let item = items[Math.floor(Math.random()*items.length)]
    return item
}
function rockChoice(){
    myChoice = "rock"
    titleLose.style.display = "none";
    titleWin.style.display = "none";
    titleNoWinner.style.display = "none";
    let randomChoice = robotChoice()
    if (randomChoice=="scissors"){
        wins +=1
        titleWin.style.display ="inline";
    }
    else if (randomChoice ==="papper") {
        losses +=1
        titleLose.style.display = "inline";   
    }
    else{
        titleNoWinner.style.display = "inline";
    }
    winsSocre.innerText = wins
    losseScore.innerText = losses
}

function papperChoice(){
    myChoice = "papper"
    titleLose.style.display = "none";
    titleWin.style.display = "none";
    titleNoWinner.style.display = "none";
    let randomChoice = robotChoice()
    if (randomChoice=="rock"){
        wins +=1
        titleWin.style.display ="inline";
    }
    else if (randomChoice ==="scissors") {
        losses+=1
        titleLose.style.display = "inline";       
    }
    else{
        titleNoWinner.style.display = "inline";
    }
    winsSocre.innerText = wins
    losseScore.innerText = losses
}
function scissorsChoice(){
    titleLose.style.display = "none";
    titleWin.style.display = "none";
    titleNoWinner.style.display = "none";
    myChoice = "scissors"
    let randomChoice = robotChoice()
    if (randomChoice=="papper"){
        wins +=1
        titleWin.style.display ="inline";
    }
    else if (randomChoice ==="rock") {
        losses+=1
        titleLose.style.display = "inline";       
    }
    else{
        titleNoWinner.style.display = "inline";
    }
    winsSocre.innerText = wins
    losseScore.innerText = losses
}

function clearStats(){
    wins = 0
    losses = 0
    winsSocre.innerText = wins
    losseScore.innerText = losses
}