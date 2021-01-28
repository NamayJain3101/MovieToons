import React from 'react'
import { QuizzesConsumer } from '../../Context/QuizContext';
import Loading from '../Loading';
import QuizzesFilter from './QuizzesFilter';
import QuizzesList from './QuizzesList';

const AllQuizzes = () => {
    return (
        <div>
            <QuizzesConsumer>
                {value => {
                    const { loading, sortedQuizzes, quizzes } = value;
                    if (loading) {
                        return <Loading title="Seasons" />
                    }
                    return (
                        <React.Fragment>
                            <QuizzesFilter quizzes={quizzes} />
                            <QuizzesList quizzes={sortedQuizzes} />
                        </React.Fragment>
                    );
                }}
            </QuizzesConsumer>
        </div>
    )
}

export default AllQuizzes
