import React, { Component } from 'react'

export default class rockPaperScissor extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
        
    }
  render() {
function All(){
const coumputerChoiceDispaly = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const result = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let coumputerChoice
let resultGame;
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    resultOfTheGame();
}))
function generateComputerChoice(){
    const randomNumer = Math.floor(Math.random() * possibleChoices.length)+1;
    console.log(randomNumer);
    if (randomNumer === 1){
        coumputerChoice = 'rock'
    }
    else if(randomNumer === 2){
        coumputerChoice = 'scissors'
    }
    else coumputerChoice = 'paper'
    coumputerChoiceDispaly.innerHTML = coumputerChoice;
} 
function resultOfTheGame (){
    if(coumputerChoice === userChoice){
        resultGame = "Draw!"; 
    }
    if(coumputerChoice ==='rock' && userChoice==='scissors'){
        resultGame = "You lost!"; 
    }
    if(coumputerChoice ==='rock' && userChoice==='paper'){
        resultGame = "You win!"; 
    }
    if(coumputerChoice ==='scissors' && userChoice==='paper'){
        resultGame = "You lost!"; 
    }
    if(coumputerChoice ==='scissors' && userChoice==='rock'){
        resultGame = "You win!"; 
    }
    if(coumputerChoice ==='paper' && userChoice==='rock'){
        resultGame = "You lost!"; 
    }
    if(coumputerChoice ==='paper' && userChoice==='scissors'){
        resultGame = "You win!"; 
    }
    result.innerHTML= resultGame;
}
    }
    return (
     <div onClick={this.All}>Start the Game</div> 
    )
  }
}

