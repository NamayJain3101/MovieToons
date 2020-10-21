import React from 'react'
import styled from 'styled-components'
import mainBCG from '../Assets/New folder/stick-people-children-5293336.png'

const Hero = ({ children, img, title, subtitle, max }) => {
    return (
        <HeroWrapper max={max} img={img}>
            <img src={img} alt="img" className='w-100' />
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    img {
        max-height: 70vh;
    }
`

Hero.defaultProps = {
    img: mainBCG
}

export default Hero
