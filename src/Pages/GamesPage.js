import React from 'react'

import GamesImage from '../Assets/games.png'
import Hero from '../Components/Hero'

const GamesPage = () => {
    return (
        <React.Fragment>
            <Hero img={GamesImage} max={true} />
        </React.Fragment>
    )
}

export default GamesPage
