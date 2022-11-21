import React, { useState } from 'react';
import Square from './Square';

const Board = (props) => {
    const renderSquare = (i) => {
        return <Square value={squares[i]} handleClick={() => handleClick(i)} />
    }

    const handleClick = (i) => {
        const squaresCopy = squares.slice();
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
    }

    const initialBoard = Array(9).fill(null);
    
    const [squares, setSquares] = useState(initialBoard);
    const [xIsNext, setXIsNext] = useState(true);

    const status = `Next Player: ${xIsNext ? 'X' : 'O'}`

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;