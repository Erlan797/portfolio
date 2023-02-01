import React from 'react'
import Result from './Result';

export default function Rock_Paper_Scissor(props){
    return (
        <>
        <div className='text-center'>
        <Result />
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
