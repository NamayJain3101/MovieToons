import React from 'react'
import Hero from '../Components/Hero'

import QuizImage from '../Assets/Hero/quizzes.png'

const QuizPage = () => {
    return (
        <React.Fragment>
            <Hero img={QuizImage} max={true} />
        </React.Fragment>
    )
}

export default QuizPage
