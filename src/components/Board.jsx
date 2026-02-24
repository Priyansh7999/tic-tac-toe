import React, { useState } from 'react'
import Square from './Square'
export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='relative flex justify-center items-center mb-6'>
                <p>Player 1 : X</p>
                <p>Player 2 : O</p>
            </div>


            <div className="grid grid-cols-3 gap-2">
                {squares.map((sq, i) => (
                    <Square
                        key={i}
                        value={sq}
                    />
                ))}
            </div>

        </div>
    )
}