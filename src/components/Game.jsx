import React, { useState } from "react";
import Board from "./Board";
export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);

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

    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every(box => box !== null);
    const handleSquareClick = (index) => {
        if (squares[index] || winner || isDraw) return;
        const newSquares = [...squares];
        newSquares[index] = isNext ? "X" : "O";
        setSquares(newSquares);
        setIsNext(!isNext);
    };
    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsNext(true);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-2/3 mt-10 px-4 py-2 bg-custom-dark-blue rounded mb-6 text-center flex justify-between">
                <p className="text-custom-blue font-mono">Player 1 : X</p>
                <p className="text-custom-green font-mono">Player 2 : O</p>
            </div>
            <div>
                {winner ? (
                    <h2 className="text-2xl font-mono text-green-500 mb-4">
                        Winner: {winner === "X" ? "Player 1" : "Player 2"}
                    </h2>
                ) : isDraw ? (
                    <h2 className="text-2xl font-mono text-yellow-400 mb-4">
                        Draw
                    </h2>
                ) : (
                    <h2 className="text-2xl font-mono text-blue-400 mb-4">
                        Next Player: {isNext ? "X" : "O"}
                    </h2>
                )}
            </div>
            <Board
                squares={squares}
                onSquareClick={handleSquareClick}
            />
            <button
                className="mt-6 px-4 py-2 font-mono bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={resetGame}
            >
                Reset Game
            </button>
        </div>
    );
}