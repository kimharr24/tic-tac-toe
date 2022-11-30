import React, { useContext } from 'react';
import { HandleClickContext } from '.';
import { SquaresContext } from '.';

const Square = ({ index }) => {
    const onClick = useContext(HandleClickContext);
    const squares = useContext(SquaresContext);

    return (
        <button className="square" onClick={() => onClick(index)}>{squares[index]}</button>
    );
}

export default Square;