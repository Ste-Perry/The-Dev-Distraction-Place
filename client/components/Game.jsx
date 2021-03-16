import React, { useState } from 'react';
import { calculateWinner } from './Winner';
import Board from './Board';
import { Link } from "react-router-dom";

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = i => {
      const boardCopy = [...board];

      if (winner || boardCopy[i]) return;

      boardCopy[i] = xIsNext ? 'X' : 'O';
      setBoard(boardCopy);
      setXisNext(!xIsNext);
  }


  const renderMoves = () => (
      <button className="meditation-button"  onClick={() => setBoard(Array(9).fill(null))}>
          Reset
      </button>
  )

  return (
      <>
      <Link to={`/`}><button className="home-button">Home</button></Link>
          <Board squares={board} onClick={handleClick} />
          <div style={styles}>
              <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
              {renderMoves()}
          </div>
      </>
  )
}

export default Game;
