import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { QuizzesConsumer } from '../Context/QuizContext';
import Loading from '../Components/Loading';
import Hero from '../Components/Hero';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const SingleQuizPage = ({ match }) => {
    const quizName = match.params.name
    const [ques, setQues] = useState(10)

    const score = localStorage.getItem(`movietoons-${quizName.replaceAll(" ", "")}`) ? JSON.parse(localStorage.getItem(`movietoons-${quizName.replaceAll(" ", "")}`)) : 0

    const handleChange = (x) => {
        setQues(x)
    }

    return (
        <div>
            <QuizzesConsumer>
                {value => {
                    const { loading, getQuiz } = value
                    const quiz = getQuiz(quizName)

                    if (!quiz) {
                        return <div className="error">
                            <h3>No Quiz Found</h3>
                            <Link to='/quiz' className="btn-secondary">Back to Quizzes</Link>
                        </div>
                    }
                    if (loading) {
                        return <Loading title={quiz.name} />
                    }

                    return (
                        <React.Fragment>
                            <Hero img={quiz.image} title={quiz.name} />
                            <QuizOptionsWrapper>
                                <Row>
                                    <Col md={3}>
                                        <div className="form-group">
                                            <label htmlFor="ques">Questions: </label>
                                            <select value={ques} name="ques" id="ques" className="form-control" onChange={(e) => handleChange(e.target.value)}>
                                                <option value={quiz.questions.length}>{quiz.questions.length}</option>
                                                <option value={quiz.questions.length / 2}>{quiz.questions.length / 2}</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div>
                                            <Link to={`/quiz/${quizName}/${ques}`} className="btn-secondary text-center" style={{ width: '80%', borderRadius: '1rem' }}>
                                                Start Quiz
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="form-group">
                                            <label htmlFor="highscore">Highscore: </label>
                                            <input type='text' disabled contentEditable={false} value={score} name='highscore' id='highscore' className='form-control text-center' />
                                        </div>
                                    </Col>
                                </Row>
                            </QuizOptionsWrapper>
                        </React.Fragment>
                    )
                }}
            </QuizzesConsumer>
        </div>
    )
}

const QuizOptionsWrapper = styled.div`
    .row {
        width: 100%;
        padding: 2rem 0;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .form-group {
        text-transform: capitalize;
    }
    .form-group label {
        display: block;
        letter-spacing: var(--mainSpacing);
        margin-bottom: 0.5rem;
        font-size: 1.3em;
        text-align: center;
    }
    .form-control {
        width: 100%;
        background: white;
        outline: 3px solid black;
        padding: 6px 12px;
        font-size: 1.2em;
        text-transform: capitalize;
    }
    .row > div > div {
        width: 80%;
        margin: 1rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between
    }
`

export default SingleQuizPage
