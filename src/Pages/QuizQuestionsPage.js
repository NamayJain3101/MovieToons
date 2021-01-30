import { Button } from 'react-bootstrap'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading'
import QuestionComponent from '../Components/QuizPage/QuestionComponent'
import { QuizzesConsumer } from '../Context/QuizContext'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import styled from 'styled-components'

const QuizQuestionsPage = ({ match, history }) => {
    const quizName = match.params.name
    const ques = match.params.ques

    const score = useRef(0)

    const calcScoreHandler = () => {
        score.current += 5
    }

    const submitHandler = () => {
        let highscore = localStorage.getItem(`movietoons-${quizName.replaceAll(" ", "")}`) ? JSON.parse(localStorage.getItem(`movietoons-${quizName.replaceAll(" ", "")}`)) : 0
        if (score.current > highscore) {
            localStorage.setItem(`movietoons-${quizName.replaceAll(" ", "")}`, JSON.stringify(score.current))
        }
        history.push(`/quiz/${quizName}/score?score=${score.current}`)
    }

    const goBackHandler = () => {
        confirmAlert({
            title: `Go Back ??`,
            message: 'Are you sure? Your progress will be lost..',
            buttons: [
                {
                    label: 'OK',
                    onClick: () => {
                        history.push(`/quiz/${quizName}`)
                    }
                },
                {
                    label: 'Cancel',
                    onClick: () => { }
                },
            ],
        })
    }

    return (
        <div>
            <QuizzesConsumer>
                {value => {
                    const { loading, getQuiz, getQues } = value
                    const quiz = getQuiz(quizName)
                    let questions
                    if (quiz) {
                        questions = getQues(quizName, ques)
                    }

                    if (!quiz) {
                        return <div className="error">
                            <h3>No Quiz Found</h3>
                            <Link to='/quiz' className="btn-secondary">Back to Quizzes</Link>
                        </div>
                    } else if (!questions) {
                        return <div className="error">
                            <h3>No Questions Found for Quiz {quizName}</h3>
                            <Link to='/quiz' className="btn-secondary">Back to Quizzes</Link>
                        </div>
                    }
                    if (loading) {
                        return <Loading title={quiz.name} />
                    }

                    return (
                        <div className='pb-5 pt-3 w-100'>
                            <div>
                                {questions.map((question, index) => {
                                    return (
                                        <QuestionComponent
                                            key={index}
                                            ques={question.ques}
                                            option1={question.option1}
                                            option2={question.option2}
                                            option3={question.option3}
                                            option4={question.option4}
                                            ans={question.correctAns}
                                            calcScoreHandler={calcScoreHandler}
                                        />
                                    )
                                })}
                            </div>
                            <ButtonContainerWrapper className='button-container'>
                                <Button
                                    variant='danger'
                                    onClick={goBackHandler}
                                    style={{
                                        width: '200px',
                                        fontSize: '1.2rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        margin: '1rem',
                                        marginTop: '2rem'
                                    }}
                                >
                                    Go Back
                                </Button>
                                <Button
                                    variant='success'
                                    onClick={submitHandler}
                                    style={{
                                        width: '200px',
                                        fontSize: '1.2rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        margin: '1rem',
                                        marginTop: '2rem'
                                    }}
                                >
                                    Submit Quiz
                                </Button>
                            </ButtonContainerWrapper>
                        </div>
                    )
                }}
            </QuizzesConsumer>
        </div>
    )
}

const ButtonContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 600px) {
        flex-direction: column;
        align-items: center;
        button {
            margin: auto !important;
            margin-top: 1.5rem !important;
        }
    }
`

export default QuizQuestionsPage
