import React from 'react'
import { Link } from 'react-router-dom';
import { QuizzesConsumer } from '../Context/QuizContext';
import Loading from '../Components/Loading';
import Hero from '../Components/Hero';

const SingleQuizPage = ({ match }) => {
    const quizName = match.params.name

    return (
        <div>
            <QuizzesConsumer>
                {value => {
                    const { loading, getQuiz } = value
                    const quiz = getQuiz(quizName)

                    if (!quiz) {
                        return <div className="error">
                            <h3>No Season Found</h3>
                            <Link to='/quiz' className="btn-secondary">Back to Quizzes</Link>
                        </div>
                    }
                    if (loading) {
                        return <Loading title={quiz.name} />
                    }

                    return (
                        <React.Fragment>
                            <Hero img={quiz.image} title={quiz.name} />
                        </React.Fragment>
                    )
                }}
            </QuizzesConsumer>
        </div>
    )
}

export default SingleQuizPage
