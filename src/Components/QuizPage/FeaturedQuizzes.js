import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import Loading from '../Loading'
import { QuizzesConsumer } from '../../Context/QuizContext'

const FeaturedQuizzes = () => {
    return (
        <FeaturedQuizzesWrapper>
            <QuizzesConsumer>
                {value => {
                    let { loading, featuredQuiz } = value;
                    featuredQuiz = featuredQuiz.map(quiz => {
                        return (
                            <Item key={quiz.id} quiz={quiz} />
                        )
                    })
                    return (
                        <section className="featured-quiz">
                            <div className="featured-quiz-center">
                                {loading ? <Loading title="Featured quiz Videos" /> : featuredQuiz}
                            </div>
                        </section>
                    )
                }}
            </QuizzesConsumer>
        </FeaturedQuizzesWrapper>
    )
}

const FeaturedQuizzesWrapper = styled.div`
    .featured-quiz-center {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 1rem;
    }

    @media screen and (min-width: 776px) {
        .featured-quiz-center {
            width: 90vw;
            grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        }
    }

    @media screen and (min-width: 992px) {
        .featured-quiz-center {
            width: 95vw;
            max-width: 1170px;
        }
    }
`

export default FeaturedQuizzes
