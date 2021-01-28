import React from 'react'
import Hero from '../Components/Hero'

import QuizImage from '../Assets/Hero/quizzes.png'
import AllQuizzes from '../Components/QuizPage/AllQuizzes'

const QuizPage = () => {
    return (
        <React.Fragment>
            <Hero img={QuizImage} max="true" />
            <AllQuizzes />
        </React.Fragment>
    )
}

export default QuizPage
