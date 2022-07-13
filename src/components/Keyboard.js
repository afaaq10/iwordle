import React, { useEffect, useCallback, useContext } from 'react'
import { AppContext } from '../App'
import Key from './Key'

const Keyboard = () => {
  const { onDelete, onEnter, onSelectingLetter, disabledState, setDisabledState } = useContext(AppContext)
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"]



  const handleKeyPress = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    }
    else if (event.key === "Backspace") {
      onDelete();
    }
    else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectingLetter(key)
        }

      })
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectingLetter(key)
        }

      })
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectingLetter(key)
        }

      })

    }
  }

  )



  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  return (

    <div className='keyboard'>

      <div className='line1'>{keys1.map((key, i) => {
        return <Key keyVal={key} key={i} disabled={disabledState.includes(key)} />
      })}
      </div>

      <div className='line2'>
        {keys2.map((key, i) => {
          return <Key keyVal={key} key={i} disabled={disabledState.includes(key)} />
        })}
      </div>

      <div className='line3'>
        <Key keyVal="ENTER" bigKey />

        {keys3.map((key, i) => {
          return <Key keyVal={key} key={i} disabled={disabledState.includes(key)} />
        })}

        <Key keyVal="DELETE" bigKey />

      </div>

    </div>
  )
}

export default Keyboard