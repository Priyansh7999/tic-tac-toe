import React, { useState } from 'react'
import Square from './Square'
export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);
    const winner = calculateWinner(squares);


    const handleSquareClick = (index) => {
        if (squares[index] || winner) return;
        const newSquares = [...squares];
        newSquares[index] = isNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsNext(!isNext);
    }

    function calculateWinner(squares) {
        const patterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < patterns.length; i++) {
            const [a, b, c] = patterns[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='relative flex justify-center items-center mb-6'>
                <p>Player 1 : X</p>
                <p>Player 2 : O</p>
            </div>
            <div className=''>
                {winner && (
                    <p className="text-2xl font-bold mb-4">
                        Winner: {winner}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-3 gap-2">
                {squares.map((sq, i) => (
                    <Square
                        key={i}
                        value={sq}
                        onClick={() => handleSquareClick(i)}
                    />
                ))}
            </div>


        </div>
    )
}