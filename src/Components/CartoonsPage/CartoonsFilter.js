import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { CartoonsConsumer } from '../../Context/CartoonsContext'
import Title from '../Title'

const CartoonsFilter = ({ cartoons }) => {
    return (
        <CartoonFilterWrapper>
            <CartoonsConsumer>
                {value => {
                    const { handleChange, cartoon } = value
                    return (
                        <section className="filter-container">
                            <section style={{ marginBottom: '2rem' }}>
                                <Title title="Search Seasons" />
                            </section>
                            <form className="filter-form">
                                <div className="form-group">
                                    <label htmlFor="cartoon">Cartoon Name: </label>
                                    <input type='text' value={cartoon} name='cartoon' id='cartoon' className='form-control' onChange={handleChange} />
                                </div>
                            </form>
                        </section>
                    )
                }}
            </CartoonsConsumer>
        </CartoonFilterWrapper>
    )
}

const CartoonFilterWrapper = styled.div`
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

export default CartoonsFilter
