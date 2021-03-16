import React from 'react';
import Tile from './Tile';

const style = {
    border: '5px solid darkblue',
    borderRadius: '12px',
    width: '300px',
    height: '300px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            <Tile key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board;