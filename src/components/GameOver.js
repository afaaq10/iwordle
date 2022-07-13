import React, { useContext } from 'react'
import { AppContext } from '../App'
const GameOver = () => {
    const { gameOver, currAttempt, rightWord } = useContext(AppContext)
    return (
        <div className='game'>

            <h1 >Correct Word : {rightWord}</h1>
            <div style={{ color: "green" }}> {gameOver.guessedWord ? "Congratulations! You won the game" : "Sorry you lost the game"}</div>
            {gameOver.guessedWord && <h3>You guessed in {currAttempt.attempt} attempts</h3>}



        </div>
    )
}

export default GameOver