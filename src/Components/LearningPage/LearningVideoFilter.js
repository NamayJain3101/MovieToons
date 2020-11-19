import React from 'react'
import styled from 'styled-components'
import { LearningConsumer } from '../../Context/LearningContext'
import Title from '../Title'

const LearningVideosFilter = ({ learning }) => {
    return (
        <LearningVideoFilterWrapper>
            <LearningConsumer>
                {value => {
                    const { handleChange, name } = value
                    return (
                        <section className="filter-container">
                            <section style={{ marginBottom: '2rem' }}>
                                <Title title="Search Seasons" />
                            </section>
                            <form className="filter-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name: </label>
                                    <input type='text' value={name} name='name' id='name' className='form-control' onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="language">Language: </label>
                                    <select name="language" id="language" className="form-control" onChange={handleChange}>
                                        <option value='all'>All</option>
                                        <option value='Hindi'>Hindi</option>
                                        <option value='English'>English</option>
                                    </select>
                                </div>
                            </form>
                        </section>
                    )
                }}
            </LearningConsumer>
        </LearningVideoFilterWrapper>
    )
}

const LearningVideoFilterWrapper = styled.div`
    .filter-container {
        padding: 5rem 0 0 0;
    }

    .filter-form {
        width: 60vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 40px;
    }

    .form-group {
        text-transform: capitalize;
    }

    .form-group label {
        display: block;
        letter-spacing: var(--mainSpacing);
        margin-bottom: 0.5rem;
        font-size: 1.3em;
        text-align: center;
    }

    .form-control {
        width: 100%;
        background: white;
        outline: 3px solid black;
        padding: 6px 12px;
        font-size: 1.2em;
        text-transform: capitalize;
    }

    @media screen and (min-width: 776px) {
        .filter-form {
            width: 70vw;
        }
    }

    @media screen and (min-width: 992px) {
        .filter-form {
            width: 95vw;
            max-width: 1170px;
        }
    }
`

export default LearningVideosFilter
