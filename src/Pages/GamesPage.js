import React from 'react'
import Hero from '../Components/Hero'
import Title from '../Components/Title'

import GamesImage from '../Assets/Hero/games.png'
import styled from 'styled-components'
import { GamesData } from '../Context/GamesData'
import Item from '../Components/GamesPage/Item'

const GamesPage = () => {
    console.log(GamesData)
    return (
        <React.Fragment>
            <Hero img={GamesImage} max="true" />
            <GamesListWrapper>
                <section className="gameslist">
                    <section>
                        <Title title="games" />
                    </section>
                    <div className="gameslist-center">
                        {GamesData.map(game => {
                            return (
                                <Item key={game.id} game={game} />
                            )
                        })}
                    </div>
                </section>
            </GamesListWrapper>
        </React.Fragment>
    )
}

const GamesListWrapper = styled.div`
    .gameslist {
        padding: 5rem 0;
        padding-top: 1rem;
    }

    .gameslist section {
        margin-bottom: 2rem;
    }

    .gameslist-center {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 30px;
    }

    @media screen and (min-width: 776px) {
        .gameslist-center {
            width: 90vw;
            grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
        }
    }

    @media screen and (min-width: 992px) {
        .gameslist-center {
            width: 95vw;
            max-width: 1170px;
        }
    }
`

export default GamesPage
