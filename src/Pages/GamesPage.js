import React from 'react'
import Hero from '../Components/Hero'

import GamesImage from '../Assets/Hero/games.png'

const GamesPage = () => {
    return (
        <React.Fragment>
            <Hero img={GamesImage} max={true} />
        </React.Fragment>
    )
}

export default GamesPage
