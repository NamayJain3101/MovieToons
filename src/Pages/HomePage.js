import React from 'react'
import styled from 'styled-components'
import ItemsCarousel from '../Components/HomePage/ItemsCarousel'

import HomeBg from '../Assets/background/home-bg.jpg'

const HomePage = () => {
    return (
        <HomePageWrapper>
            <section>
                <ItemsCarousel />
            </section>
        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.section`
    background-image: linear-gradient(rgba(0,255,0, 0.2), rgba(0,255,0,0.2)) ,url(${HomeBg});
    height: 100vh;
    section {
        padding-top: 1rem;
    }
`

export default HomePage
