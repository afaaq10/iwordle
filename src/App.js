import React, { useState, createContext, useEffect } from 'react'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { boardDefault, generateWords } from './Words'
import './App.css'
import GameOver from './components/GameOver'


export const AppContext = createContext()
const App = () => {
  const rightWord = "RIGHT"

  const [board, setBoard] = useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState({ letter: 0, attempt: 0 })
  const [wordSet, setNewWords] = useState(new Set())
  const [disabledState, setDisabledState] = useState([])
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false })
  const [correctWord, setCorrectWord] = useState("")



  useEffect(() => {
    generateWords().then((words) => {
      setNewWords(words.wordSet)
      setCorrectWord(words.correctWord)
      console.log(words)

    })


  }, [])






  const onDelete = () => {
    if (currAttempt.letter == 0) return
    const newBoard = [...board];

    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";


    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 })


  }

  const onEnter = () => {
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toUpperCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }

    if (currWord === rightWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;

    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });

    }

  }

  const onSelectingLetter = (keyVal) => {

    if (currAttempt.letter > 4) return

    const newBoard = [...board];

    newBoard[currAttempt.attempt][currAttempt.letter] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter + 1 })



  }

  return (
    <AppContext.Provider value={{
      board, setBoard, currAttempt, setCurrAttempt, onDelete, onEnter, onSelectingLetter,
      rightWord, disabledState, setDisabledState, gameOver, setGameOver, correctWord


    }}>
      <div className='App'>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}



        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App