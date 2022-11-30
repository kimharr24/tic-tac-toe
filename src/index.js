import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './Board';
import calculateWinner from './CalculateWinner';

export const HandleClickContext = React.createContext();
export const SquaresContext = React.createContext();

const Game = () => {
    const [boardState, setBoardState] = useState({
        history: [{
            squares: Array(9).fill(null)
        }],
        stepNumber: 0,
        xIsNext: true,
    })

    const currentBoard = boardState.history[boardState.stepNumber];

    const handleClick = (i) => {
        if (calculateWinner(currentBoard.squares) || currentBoard.squares[i]) {
            return;
        }

        const squaresCopy = currentBoard.squares.slice();
        squaresCopy[i] = boardState.xIsNext ? 'X' : 'O';
        setBoardState({
            history: boardState.history.concat({
                squares: squaresCopy
            }),
            stepNumber: boardState.history.length,
            xIsNext: !boardState.xIsNext
        })
    }

    let status;
    if (calculateWinner(currentBoard.squares)) {
        status = `${calculateWinner(currentBoard.squares)} is the winner!`
    }
    else {
        status = `${boardState.xIsNext ? 'X' : 'O'} is next!`
    }

    return (
        <div className="game">
            <div className="game-board">
                {status}
                <HandleClickContext.Provider value={i => handleClick(i)}>
                    <SquaresContext.Provider value={currentBoard.squares}>
                        <Board />
                    </SquaresContext.Provider>
                </HandleClickContext.Provider>
            </div>
            <div className="game-info">
                <ol>
                    
                </ol>
            </div>
        </div>
    )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  