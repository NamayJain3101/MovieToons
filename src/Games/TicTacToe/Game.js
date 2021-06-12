import React, { useState } from 'react';
import { calculateWinner } from './helper';
import Board from './Board';

const styles = {
    width: '340px',
    margin: '20px auto',
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const [isTie, setIsTie] = useState(false);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1)
        const current = timeInHistory[stepNumber]
        const squares = [...current];

        if (winner || squares[i]) return;
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);
        checkSquares()
    };


    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    }


    const checkSquares = () => {
        const squares = history[history.length - 1]
        const filledSquares = squares.map(item => {
            return item !== null
        })
        const isTie = filledSquares.filter(square => {
            return square === false
        })
        if (isTie.length === 1) {
            setIsTie(true)
        }
    }

    return (
        <React.Fragment>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={{ ...styles, marginTop: "3rem" }}>
                <h1>
                    {winner ? 'Winner: ' + winner : isTie ? "Game tied" : 'Next Player: ' + (xIsNext ? 'X' : '0')}
                </h1>
                {(winner || isTie) && <button style={{ background: "green", color: "white", padding: "1rem" }} onClick={() => jumpTo(0)}>{"Play Again"}</button>}
            </div>
        </React.Fragment>
    );
};

export default Game;