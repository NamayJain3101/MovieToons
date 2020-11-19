import React from 'react'
import Hero from '../Components/Hero'
import AllLearningVideos from '../Components/LearningPage/AllLearningVideos'

import LearningImage from '../Assets/Hero/learning.png'

const LearningPage = () => {
    return (
        <React.Fragment>
            <Hero img={LearningImage} max={true} />
            <AllLearningVideos />
        </React.Fragment>
    )
}

export default LearningPage
