import React, { useState} from 'react'

export default function Rock_Paper_Scissor(){
  let [coumputerChoice ,setRandomNumber] = useState(Math.floor(Math.random() * 3)+1);
  let [resultGame, setResult] = useState('');
  let [userChoice, setUserChoice] = useState('');

  useState('click',(e)=>{
    userChoice = e.target.id
    if(userChoice === document.getElementById('rock')){setUserChoice('rock')}
    AddCopmuterChoice();
    ResultTheGame();
      })
        
    
  function AddCopmuterChoice(){
  useState(()=>{
    if (coumputerChoice  === 1){
      setRandomNumber('rock')
  }
  else if(coumputerChoice  === 2){
      setRandomNumber('scissors')
  }
  else setRandomNumber('paper') 
  
  })}
function ResultTheGame(){
  useState(() => {
    if(coumputerChoice === userChoice){
              setResult(resultGame = "Draw!"); 
          }
          if(coumputerChoice ==='rock' && userChoice==='scissors'){
            setResult(resultGame = "You lost!"); 
          }
          if(coumputerChoice ==='rock' && userChoice==='paper'){
            setResult(resultGame = "You win!"); 
          }
          if(coumputerChoice ==='scissors' && userChoice==='paper'){
            setResult(resultGame = "You lost!"); 
          }
          if(coumputerChoice ==='scissors' && userChoice==='rock'){
            setResult(resultGame = "You win!"); 
          }
          if(coumputerChoice ==='paper' && userChoice==='rock'){
            setResult(resultGame = "You lost!"); 
          }
          if(coumputerChoice ==='paper' && userChoice==='scissors'){
            setResult("You win!"); 
          }
        
  })}
    return (
        <>
        <div className='text-center'>
        <button id="rock">Rock</button>
        <button  id="paper">Paper</button>
        <button  id="scissors">Scissors</button>
        <h2>Computer Choice:<span id="computer-choice"></span></h2>
        <h2 >{coumputerChoice}</h2>
        <h2 >User Choice:{userChoice}<span id="user-choice"></span></h2>
        <h2 >Result:{resultGame}<span id="result"></span></h2>
        </div>
        </>
    )
  }
// const [coumputerChoiceDispaly, setcomputerChoiceDisplay] = useState('');
 
// const userChoiceDisplay = document.getElementById("user-choice")
// const result = document.getElementById("result")
// const possibleChoices = document.querySelectorAll("button")
// let userChoice
// let coumputerChoice
// let resultGame;
// possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
//     userChoice = e.target.id
//     userChoiceDisplay.innerHTML = userChoice}))
//     GenerateComputerChoice();
//     resultOfTheGame();
// }))
// // ()=>setRandomNumber(randomNumer= Math.floor(Math.random() * possibleChoices.length)+1)
// function GenerateComputerChoice(){    
//     if (this.state.randomNumber === 1){
//         this.state.randomNumber = 'rock'
//     }
//     else if(this.state.randomNumber === 2){
//         this.state.randomNumber = 'scissors'
//     }
//     else this.state.randomNumber = 'paper'
// } 
// function resultOfTheGame (){
//   
