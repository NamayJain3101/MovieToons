import React from 'react'
import Hero from '../Components/Hero'

import LearningImage from '../Assets/learning.png'

const LearningPage = () => {
    return (
        <React.Fragment>
            <Hero img={LearningImage} max={true} />
        </React.Fragment>
    )
}

export default LearningPage
