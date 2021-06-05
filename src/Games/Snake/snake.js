import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
} from "./constants";

const Snake = () => {

    window.addEventListener("keydown", function (e) {
        // space, page up, page down and arrow keys:
        if ([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);

    const canvasRef = useRef();
    const [snake, setSnake] = useState(SNAKE_START);
    const [apple, setApple] = useState(APPLE_START);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0)
    const [highscore, setHighscore] = useState(localStorage.getItem(`movietoons-snake`) ? JSON.parse(localStorage.getItem(`movietoons-snake`)) : 0)

    useInterval(() => gameLoop(), speed);

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
        const highscore = localStorage.getItem(`movietoons-snake`) ? JSON.parse(localStorage.getItem(`movietoons-snake`)) : 0
        if (score > highscore) {
            localStorage.setItem(`movietoons-snake`, JSON.stringify(score))
            setHighscore(score)
        }
    };

    const moveSnake = ({ keyCode }) =>
        keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

    const createApple = () =>
        apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

    const checkCollision = (piece, snk = snake) => {
        if (
            piece[0] * SCALE >= CANVAS_SIZE[0] ||
            piece[0] < 0 ||
            piece[1] * SCALE >= CANVAS_SIZE[1] ||
            piece[1] < 0
        )
            return true;

        for (const segment of snk) {
            if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
        }
        return false;
    };

    const checkAppleCollision = newSnake => {
        if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
            let newApple = createApple();
            setScore(score + 1)
            setSpeed(speed - 1)
            while (checkCollision(newApple, newSnake)) {
                newApple = createApple();
            }
            setApple(newApple);
            return true;
        }
        return false;
    };

    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
        snakeCopy.unshift(newSnakeHead);
        if (checkCollision(newSnakeHead)) endGame();
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
        setSnake(snakeCopy);
    };

    const startGame = () => {
        setSnake(SNAKE_START);
        setApple(APPLE_START);
        setDir([0, -1]);
        setSpeed(SPEED);
        setGameOver(false);
        setScore(0)
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "pink";
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = "lightblue";
        context.fillRect(apple[0], apple[1], 1, 1);
    }, [snake, apple, gameOver]);

    return (
        <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <canvas
                style={{ border: "1px solid black", margin: "2rem auto" }}
                ref={canvasRef}
                width={`${CANVAS_SIZE[0]}px`}
                height={`${CANVAS_SIZE[1]}px`}
            />
            {gameOver && <div style={{
                textAlign: "center",
                fontWeight: "bold",
                letterSpacing: "3px",
                color: "blue",
                fontSize: "2rem"
            }}>GAME OVER!</div>}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <div style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    color: "deeppink",
                    fontSize: "2rem",
                    margin: "0 2rem"
                }}>Score: {score}</div>
                <div style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    color: "deeppink",
                    fontSize: "2rem",
                    margin: "0 2rem"
                }}>(Highscore: {highscore})</div>
            </div>
            <button className="btn-secondary m-4" onClick={startGame}>Start Game</button>
        </div>
    );
};

export default Snake;