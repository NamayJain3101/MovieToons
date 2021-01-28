import React from 'react'
import styled from 'styled-components'
import mainBCG from '../Assets/New folder/stick-people-children-5293336.png'

const Hero = ({ img, max }) => {
    return (
        <HeroWrapper max={max} img={img}>
            <img src={img} alt="img" className='w-100' />
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 30vh;
    @media(min-width: 701px) {
        height: ${props => props.max ? '60vh' : '50vh'};
    }
`

Hero.defaultProps = {
    img: mainBCG
}

export default Hero
