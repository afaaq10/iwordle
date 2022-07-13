import React from 'react'
import Letter from './Letter'
const Board = () => {
    return (

        <div className='board-container'>

            <div className='board'>
                <div className='row'>
                    <Letter letterPos={0} attemptedValue={0} />
                    <Letter letterPos={1} attemptedValue={0} />
                    <Letter letterPos={2} attemptedValue={0} />
                    <Letter letterPos={3} attemptedValue={0} />
                    <Letter letterPos={4} attemptedValue={0} />


                </div>
                <div className='row'>
                    <Letter letterPos={0} attemptedValue={1} />
                    <Letter letterPos={1} attemptedValue={1} />
                    <Letter letterPos={2} attemptedValue={1} />
                    <Letter letterPos={3} attemptedValue={1} />
                    <Letter letterPos={4} attemptedValue={1} />


                </div>
                <div className='row'>
                    <Letter letterPos={0} attemptedValue={2} />
                    <Letter letterPos={1} attemptedValue={2} />
                    <Letter letterPos={2} attemptedValue={2} />
                    <Letter letterPos={3} attemptedValue={2} />
                    <Letter letterPos={4} attemptedValue={2} />


                </div>
                <div className='row'>
                    <Letter letterPos={0} attemptedValue={3} />
                    <Letter letterPos={1} attemptedValue={3} />
                    <Letter letterPos={2} attemptedValue={3} />
                    <Letter letterPos={3} attemptedValue={3} />
                    <Letter letterPos={4} attemptedValue={3} />


                </div>
                <div className='row'>
                    <Letter letterPos={0} attemptedValue={4} />
                    <Letter letterPos={1} attemptedValue={4} />
                    <Letter letterPos={2} attemptedValue={4} />
                    <Letter letterPos={3} attemptedValue={4} />
                    <Letter letterPos={4} attemptedValue={4} />

                </div>
                <div className='row'>
                    <Letter letterPos={0} attemptedValue={5} />
                    <Letter letterPos={1} attemptedValue={5} />
                    <Letter letterPos={2} attemptedValue={5} />
                    <Letter letterPos={3} attemptedValue={5} />
                    <Letter letterPos={4} attemptedValue={5} />


                </div>

            </div>
        </div>
    )
}

export default Board