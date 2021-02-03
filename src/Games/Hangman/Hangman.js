import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.js';
import { FaHeart } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'

import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [step0, step1, step2, step3, step4, step5, step6]
    }

    constructor(props) {
        super(props);
        this.state = {
            mistake: 0,
            guessed: new Set([]),
            answer: randomWord(),
            highscore: localStorage.getItem(`movietoons-hangman`) ? JSON.parse(localStorage.getItem(`movietoons-hangman`)) : 0
        }
    }

    handleGuess = e => {
        let letter = e.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
        }));
    }

    guessedWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button className='btn btn-lg btn-secondary m-2'
                key={letter}
                value={letter}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(letter)}
                style={{ width: '50px' }}
            >
                {letter.toUpperCase()}
            </button>
        ))
    }

    resetButton = () => {
        this.setState({
            mistake: 0,
            guessed: new Set([]),
            answer: randomWord(),
            highscore: localStorage.getItem(`movietoons-hangman`) ? JSON.parse(localStorage.getItem(`movietoons-hangman`)) : 0
        });
    }

    render() {
        const gameOver = this.state.mistake >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        let gameStat = this.generateButtons();

        if (isWinner) {
            gameStat = "You Won!!!"
            const score = (this.props.maxWrong - this.state.mistake) * 10
            const highscore = localStorage.getItem(`movietoons-hangman`) ? JSON.parse(localStorage.getItem(`movietoons-hangman`)) : 0
            if (score > highscore) {
                localStorage.setItem(`movietoons-hangman`, JSON.stringify((this.props.maxWrong - this.state.mistake) * 10))
            }
        }

        if (gameOver) {
            gameStat = "You Lost!!!"
        }

        return (
            <div className='w-100 hangmanContainer'>
                <div className='Hangman container'>
                    <div className='score'>
                        <div className="highscore">Highscore: {this.state.highscore}</div>
                        <div className="wrongG">{[...Array(this.state.mistake).keys()].map((elem, index) => <FiHeart key={index} fontSize='1.5rem' color='yellow' />)}{[...Array(this.props.maxWrong - this.state.mistake).keys()].map((elem, index) => <FaHeart key={index} fontSize='1.5rem' color='cyan' />)}</div>
                    </div>
                    <div className='guess'>
                        <div className="text-center">
                            <img src={this.props.images[this.state.mistake]} alt="imageofHangman" />
                        </div>
                        <div className="text-center">
                            <span className='cityName'>Guess the City Name </span>
                            <p>&nbsp;</p>
                            <p className='wordG'>
                                {!gameOver ? this.guessedWord() : this.state.answer.toUpperCase()}
                            </p>
                            <p>&nbsp;</p>
                            {(isWinner || gameOver) && (
                                <div className="highscore">Score: {(this.props.maxWrong - this.state.mistake) * 10}</div>
                            )}
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='gameS'>{gameStat}</p>
                        <button className='btn btn-info m-2' onClick={this.resetButton}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hangman;

