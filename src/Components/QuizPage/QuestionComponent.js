import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'

const QuestionComponent = ({ ques, option1, option2, option3, option4, ans, calcScoreHandler }) => {

    const [correct, setCorrect] = useState('')
    const [option, setOption] = useState('')

    const checkAns = (op) => {
        setOption(op)
        if (op.toLowerCase() === ans.toLowerCase()) {
            setCorrect('correct')
            calcScoreHandler()
        } else {
            setCorrect('wrong')
        }
    }

    return (
        <QuestionWrapper option={option} correct={correct}>
            <div>
                <h5>{ques}</h5>
                <div className='options-container row'>
                    <Col md={6}>
                        <div
                            id='option1'
                            className={
                                `${correct === 'correct' && ans.toLowerCase() === 'a'
                                    ? 'option correct'
                                    : correct === 'wrong' && option.toLowerCase() === 'a' ? 'option wrong' : 'option'
                                }`
                            }
                            onClick={!option ? () => checkAns('a') : () => { }}
                        >
                            <p>{option1}</p>
                            <div className='radio'></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div
                            id='option2'
                            className={
                                `${correct === 'correct' && ans.toLowerCase() === 'b'
                                    ? 'option correct'
                                    : correct === 'wrong' && option.toLowerCase() === 'b' ? 'option wrong' : 'option'
                                }`
                            }
                            onClick={!option ? () => checkAns('b') : () => { }}
                        >
                            <p>{option2}</p>
                            <div className='radio'></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div
                            id='option3'
                            className={
                                `${correct === 'correct' && ans.toLowerCase() === 'c'
                                    ? 'option correct'
                                    : correct === 'wrong' && option.toLowerCase() === 'c' ? 'option wrong' : 'option'
                                }`
                            }
                            onClick={!option ? () => checkAns('c') : () => { }}
                        >
                            <p>{option3}</p>
                            <div className='radio'></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div
                            id='option4'
                            className={
                                `${correct === 'correct' && ans.toLowerCase() === 'd'
                                    ? 'option correct'
                                    : correct === 'wrong' && option.toLowerCase() === 'd' ? 'option wrong' : 'option'
                                }`
                            }
                            onClick={!option ? () => checkAns('d') : () => { }}
                        >
                            <p>{option4}</p>
                            <div className='radio'></div>
                        </div>
                    </Col>
                </div>
            </div>
        </QuestionWrapper>
    )
}

const QuestionWrapper = styled.div`
    padding-top: 4rem;
    padding: 2rem;
    >div {
        max-width: 800px;
        margin: auto;
    }
    h5 {
        width: 100%;
        margin-bottom: 1rem;
        text-align: justify
    }
    .option {
        background: #eee;
        margin: 1rem 0;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 2px 2px 20px #ccc;
        border-radius: 10px;
        cursor: ${props => props.option ? 'default' : 'pointer'};
    }
    .option:hover {
        background: ${props => props.option ? '#eee' : 'cyan'};
        box-shadow: ${props => props.option ? '2px 2px 20px #ccc' : '2px 2px 20px #6565ff'};
    }
    .option p {
        margin: 0;
        font-size: 1.2rem;
    }
    .radio {
        width: 20px;
        height: 20px;
        background: grey;
        outline: 1px solid grey;
        outline-offset: 3px;
    }
    .option:hover .radio {
        background: ${props => props.option ? 'grey' : 'blue'};
        outline: 1px solid ${props => props.option ? 'grey' : 'blue'};
    }
    .correct, .correct:hover {
        background: #69ff69;
        box-shadow: 2px 2px 20px green;
    }
    .correct > .radio, .correct:hover > .radio {
        background: green;
        outline: 1px solid green;
    }
    .wrong, .wrong:hover {
        background: #ffa297;
        box-shadow: 2px 2px 20px brown;
    }
    .wrong > .radio, .wrong:hover > .radio {
        background: brown;
        outline: 1px solid brown;
    }
`

export default QuestionComponent
