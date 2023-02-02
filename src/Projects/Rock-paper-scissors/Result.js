import React, { useState } from 'react'
import Button from './Button';
import ComputerChoice from './ComputerChoice';
export default function Result(props) {
    
    let [userChoice, setUserChoice] = useState("");
    let [coumputerChoice] = useState(Math.floor(Math.random() * 3) +1) ;
    const handlerClickRock = () => {
        setUserChoice(userChoice = 'rock')
    }
    const handlerClickPaper = () => {
        setUserChoice(userChoice = 'paper')
    }
    const handlerClickScissors = () => {
        setUserChoice(userChoice = 'scissors')
    }
    
    
    if (coumputerChoice === 1){
        coumputerChoice ='rock'}
    else if (coumputerChoice === 2){
        coumputerChoice ='scissors'}

    else if (coumputerChoice === 3){coumputerChoice = 'paper'}
    
    let resultGame = useState('');
    if (coumputerChoice === userChoice) {
        resultGame = "Draw!"
    }
    else if (coumputerChoice === 'rock' && userChoice ==='scissors') {
        resultGame = "You lost!"
    }
    else if (coumputerChoice === 'rock' && userChoice === 'paper') {
        resultGame = "You win!"
    }
    else if (coumputerChoice === 'scissors' && userChoice === 'paper') {
        resultGame = "You lost!"
    }
    else if (coumputerChoice === 'scissors' && userChoice ==='rock') {
        resultGame = "You win!"
    }
    else if (coumputerChoice === 'paper' && userChoice === 'rock') {
        resultGame = "You lost!"
    }
    else if (coumputerChoice === 'paper' && userChoice === 'scissors') {
        resultGame = "You win!"
    }

    return (
        <>

            <Button onClick={handlerClickRock} name='Rock' />
            <Button onClick={handlerClickPaper} name='Paper' />
            <Button onClick={handlerClickScissors} name='Scissors' />
            <h2 >User Choice:</h2>
            <h2>{userChoice}</h2>
            <ComputerChoice name = {coumputerChoice}/>
            <h2>Result:{resultGame}</h2>

        </>
    )
    }
