import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import Loading from '../Loading'
import { LearningConsumer } from '../../Context/LearningContext'

const FeaturedLearningVideos = () => {
    return (
        <FeaturedLearningVideosWrapper>
            <LearningConsumer>
                {value => {
                    let { loading, featuredLearning: learningVideos } = value;
                    learningVideos = learningVideos.map(learning => {
                        return (
                            <Item key={learning.id} learning={learning} />
                        )
                    })
                    return (
                        <section className="featured-learning">
                            <div className="featured-learning-center">
                                {loading ? <Loading title="Featured Learning Videos" /> : learningVideos}
                            </div>
                        </section>
                    )
                }}
            </LearningConsumer>
        </FeaturedLearningVideosWrapper>
    )
}

const FeaturedLearningVideosWrapper = styled.div`
    .featured-learning-center {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 40px;
    }

    @media screen and (min-width: 776px) {
        .featured-learning-center {
            width: 90vw;
            grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        }
    }

    @media screen and (min-width: 992px) {
        .featured-learning-center {
            width: 95vw;
            max-width: 1170px;
        }
    }
`

export default FeaturedLearningVideos
