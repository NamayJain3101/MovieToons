import React from 'react'
import styled from 'styled-components'
import Title from '../Title'
import Item from './Item'

const QuizzesList = ({ quizzes }) => {
    if (quizzes.length === 0) {
        return (
            <div className="empty-search">
                <h3>No quiz matched your search parameters !!!</h3>
            </div>
        )
    }
    return (
        <QuizzesListWrapper>
            <section className="quizzeslist">
                <section>
                    <Title title="quizzes" />
                </section>
                <div className="quizzeslist-center">
                    {
                        quizzes.map(item => {
                            return <Item key={item.id} quiz={item} />
                        })
                    }
                </div>
            </section>
        </QuizzesListWrapper>
    )
}

const QuizzesListWrapper = styled.div`
    .quizzeslist {
        padding: 5rem 0;
        padding-top: 1rem;
    }

    .quizzeslist section {
        margin-bottom: 2rem;
    }

    .quizzeslist-center {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 30px;
    }

    @media screen and (min-width: 776px) {
        .quizzeslist-center {
            width: 90vw;
            grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        }
    }

    @media screen and (min-width: 992px) {
        .quizzeslist-center {
            width: 95vw;
            max-width: 1170px;
        }
    }
`

export default QuizzesList
