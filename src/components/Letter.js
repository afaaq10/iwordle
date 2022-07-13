import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'
import './Board'
import '../App.css'

const Letter = ({ letterPos, attemptedValue }) => {


    const { board, correctWord, currAttempt, setDisabledState } = useContext(AppContext)

    const value = board[attemptedValue][letterPos]

    const correct = correctWord.toUpperCase()[letterPos] === value
    const almost = !correct && value != "" && correctWord.includes(value)

    const letterState = currAttempt.attempt > attemptedValue && (correct ? "correct" : almost ? "almost" : "error")


    useEffect(() => {
        if (value != "" && !almost && !correct) {
            setDisabledState((prev) => [...prev, value])
        }


    }, [currAttempt.attempt])






    return (
        <div className='letter' id={letterState ? letterState : "undefined"}>{value}</div>
    )
}

export default Letter