import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './Board';

const Game = (props) => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div></div>
                <ol></ol>
            </div>
        </div>
    )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  