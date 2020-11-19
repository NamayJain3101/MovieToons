import React from 'react'
import styled from 'styled-components'
import Title from '../Title'
import Item from './Item'

const LearningVideoList = ({ learning }) => {
    if (learning.length === 0) {
        return (
            <div className="empty-search">
                <h3>No Video matched your search parameters !!!</h3>
            </div>
        )
    }
    return (
        <LearningVideoListWrapper>
            <section className="learningVideoList">
                <section>
                    <Title title="Learning Videos" />
                </section>
                <div className="learningVideoList-center">
                    {
                        learning.map(item => {
                            return <Item key={item.id} learning={item} />
                        })
                    }
                </div>
            </section>
        </LearningVideoListWrapper>
    )
}

const LearningVideoListWrapper = styled.div`
    .learningVideoList {
        padding: 5rem 0;
        padding-top: 1rem;
    }

    .learningVideoList section {
        margin-bottom: 2rem;
    }

    .learningVideoList-center {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 30px;
    }

    @media screen and (min-width: 776px) {
        .learningVideoList-center {
            width: 90vw;
            grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        }
    }

    @media screen and (min-width: 992px) {
        .learningVideoList-center {
            width: 95vw;
            max-width: 1170px;
        }
    }
`

export default LearningVideoList
