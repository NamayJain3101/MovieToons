import React from 'react'
import Hero from '../Components/Hero'
import Title from '../Components/Title'

import GamesImage from '../Assets/Hero/games.png'
import styled from 'styled-components'
import { GamesData } from '../Context/GamesData'
import Item from '../Components/GamesPage/Item'

const GamesPage = () => {
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
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        max-width: 1400px;
        margin: auto;
    }
`

export default GamesPage
