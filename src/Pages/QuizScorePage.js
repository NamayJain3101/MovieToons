import React from 'react'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const QuizScorePage = ({ match, location }) => {
    const quizName = match.params.name
    const score = location.search && location.search.split('=')[1]
    return (
        <div className='w-100 h-100'>
            <ScorePageWrapper>
                <h1>Congratulations!!</h1>
                <HiOutlineBadgeCheck className='badge' color='deeppink' fontSize='300' />
                <div className='score'>
                    <h3>Score: <span>{score}</span></h3>
                    <h3>Quiz: <span>{quizName}</span></h3>
                </div>
                <Link to='/quiz' className='btn-secondary mt-4'>Back to Quizzes</Link>
            </ScorePageWrapper>
        </div>
    )
}

const ScorePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    h1 {
        margin-bottom: 2rem;
        text-transform: uppercase;
        font-size: 1.5rem;
        color: blue;
        letter-spacing: 2px;
        font-weight: bold;
    }
    .badge {
        width: 300px;
        height: 300px;
    }
    .score {
        color: purple;
        margin: 2rem auto;
    }
    h3 {
        text-transform: uppercase;
        text-align: center;
        font-size: 1.3rem;
        letter-spacing: 2px;
    }
    span {
        font-size: 1.6rem;
        font-weight: bold;
        color: blue;
    }
    @media(max-width: 701px) {
        h1{ 
            margin: 0;
        }
        .score{ 
            margin: 0;
        }
    }
`

export default QuizScorePage
