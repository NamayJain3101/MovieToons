import React from 'react'
import styled from 'styled-components'
import ItemsCarousel from '../Components/HomePage/ItemsCarousel'

import HomeBg from '../Assets/background/home-bg.jpg'
import FeaturedCartoons from '../Components/CartoonsPage/FeaturedCartoons'
import Title from '../Components/Title'
import FeaturedLearningVideos from '../Components/LearningPage/FeaturedLearningVideos'
import FeaturedQuizzes from '../Components/QuizPage/FeaturedQuizzes'

const HomePage = () => {
    return (
        <React.Fragment>
            <HomePageWrapper>
                <section>
                    <ItemsCarousel />
                </section>
                <hr></hr>
                <section>
                    <Title title='Featured cartoons' />
                </section>
                <FeaturedCartoons />
                <section>
                    <Title title='Featured Learning Videos' />
                </section>
                <FeaturedLearningVideos />
                <section>
                    <Title title='Featured Quizzes' />
                </section>
                <FeaturedQuizzes />
            </HomePageWrapper>
        </React.Fragment>
    )
}

const HomePageWrapper = styled.section`
    background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)) ,url(${HomeBg});
    section {
        padding: 1rem 0;
    }
`

export default HomePage
