import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import { CartoonsConsumer } from '../../Context/CartoonsContext'
import Loading from '../Loading'

const FeaturedCartoons = () => {
    return (
        <FeaturedCartoonsWrapper>
            <CartoonsConsumer>
                {value => {
                    let { loading, featuredCartoons: cartoons } = value;
                    cartoons = cartoons.map(cartoon => {
                        return (
                            <Item key={cartoon.id} cartoon={cartoon} />
                        )
                    })
                    return (
                        <section className="featured-cartoons">
                            <div className="featured-cartoons-center">
                                {loading ? <Loading title="Featured Cartoons" /> : cartoons}
                            </div>
                        </section>
                    )
                }}
            </CartoonsConsumer>
        </FeaturedCartoonsWrapper>
    )
}

const FeaturedCartoonsWrapper = styled.div`
    .featured-cartoons-center {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 40px;
    }

    @media screen and (min-width: 776px) {
        .featured-cartoons-center {
            width: 90vw;
            grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        }
    }

    @media screen and (min-width: 992px) {
        .featured-cartoons-center {
            width: 95vw;
            max-width: 1170px;
        }
    }
`

export default FeaturedCartoons
