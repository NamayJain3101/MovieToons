import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <FooterWrapper>
            <footer className='text-center'>
                <p>Copyright &copy; MovieToons 2021</p>
            </footer>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    padding: 1rem;
    border-top: 1px solid black;
    box-shadow: 1px 1px 10px grey;
`

export default Footer
