import React, { useContext } from 'react'
import { AppContext } from '../App'

const Key = ({ keyVal, bigKey, disabled }) => {
    const { onDelete, onEnter, onSelectingLetter } = useContext(AppContext)

    const handleKeyPress = () => {

        if (keyVal == "ENTER") {
            onEnter();
        }

        else if (keyVal == "DELETE") {

            onDelete();

        }

        else {
            onSelectingLetter(keyVal)

        }

    }




    return (
        <div className='key' id={bigKey ? "big" : disabled && "disbaled"} onClick={handleKeyPress}>{keyVal}</div>
    )
}

export default Key