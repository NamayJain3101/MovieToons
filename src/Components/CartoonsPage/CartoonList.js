import React from 'react'
import styled from 'styled-components'
import Title from '../Title'
import Item from './Item'

const CartoonList = ({ cartoons }) => {
    if (cartoons.length === 0) {
        return (
            <div className="empty-search">
                <h3>No Cartoon matched your search parameters !!!</h3>
            </div>
        )
    }
    return (
        <CartoonListWrapper>
            <section className="cartoonslist">
                <section>
                    <Title title="Cartoons" />
                </section>
                <div className="cartoonslist-center">
                    {
                        cartoons.map(item => {
                            return <Item key={item.id} cartoon={item} />
                        })
                    }
                </div>
            </section>
        </CartoonListWrapper>
    )
}

const CartoonListWrapper = styled.div`
    .cartoonslist {
        padding: 5rem 0;
        padding-top: 1rem;
    }

    .cartoonslist section {
        margin-bottom: 2rem;
    }

    .cartoonslist-center {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 30px;
    }

    @media screen and (min-width: 776px) {
        .cartoonslist-center {
            width: 90vw;
            grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        }
    }

    @media screen and (min-width: 992px) {
        .cartoonslist-center {
            width: 95vw;
            max-width: 1170px;
        }
    }
`

export default CartoonList
